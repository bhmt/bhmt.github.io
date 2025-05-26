const _dbKey = "sqlite3pismenostonline";
const _queryByName = `
select
url, first, last, phone
from person
where
first like '%' || ? || '%'
and last like '%' || ? || '%'
;`


let database = null;

async function Init() {
    const saved = await idbKeyval.get(_dbKey);
    const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${file}`
    });

    if (saved) {
        database = new SQL.Database(saved);
        console.log("Loaded from IndexedDB");
    } else {
        const response = await fetch("/db/db.sqlite3");
        const buffer = await response.arrayBuffer();
        database = new SQL.Database(new Uint8Array(buffer));
        await idbKeyval.set(_dbKey, database.export());
        console.log("Loaded from file");
    }
}

function Query(first, last) {
    let results = [];

    try {
        const stmt = database.prepare(_queryByName);
        stmt.bind([first, last])

        while (stmt.step()) {
            const row = stmt.get()

            let phone = row[3]
            const phoneArray = row[3].split("")
            if (phoneArray.length >= 11) {
                const cc = phoneArray.slice(0, 3).join("");
                const oc = phoneArray.slice(3, 5).join("");
                const t = phoneArray.slice(5, 8).join("");
                const rest = phoneArray.slice(8).join("");
                phone = [`+${cc}`, oc, t, rest].join(" ");
            }

            results.push({ Url: row[0], First: row[1], Last: row[2], Phone: phone })
        }

        stmt.free();
        return results;
    } catch (err) {
        console.error("Query error:", err);
        return null;
    }
}

window.addEventListener('DOMContentLoaded', Init);
