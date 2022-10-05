/**
 * create fake data for food price monitoring tool
 */

const yearsBack=25
const totMonthsBack = 12*yearsBack


export function get() {

    const sizeTotal = 2*4*26*32*totMonthsBack

    console.log(`dataGenrator: creating ${sizeTotal} datapoints.`)

    let values = ""
    for(let i=0; i<sizeTotal; i++) {
        const comma = i===0 ? "":","
        const linear = i
        const rnd = Math.floor(Math.random() * 1000)
        values += `${comma}"${i}":"${linear}"`
    }

    // "2021-06": 0,
    // "2021-07": 1,
    let timeidx = ""
    //"2021-06": "2021-06",
    //"2021-07": "2021-07",
    let timelbl = ""
    for(let monthCtr=0, y=2022-yearsBack, m=1; monthCtr<totMonthsBack; monthCtr++) {
        const comma = monthCtr===0?"":","
        const yearAndMonth = `${(""+y).padStart(4, '0')}-${(""+m).padStart(2, '0')}`
        timeidx += `${comma}"${yearAndMonth}":"${monthCtr}"`
        timelbl += `${comma}"${yearAndMonth}":"${yearAndMonth}"`
        m += 1; if(m>12) {m=1; y+=1;}
    }

    const retVal = part1 + values + part2 + timeidx + part3 + timelbl + part4

    //console.log(JSON.parse(r))  //for debugging
    //console.log(r)

    console.log("length of string (MegaChars):" + retVal.length/1024/1024)

    return retVal
}


const part1 = `
{
    "version": "2.0",
    "class": "dataset",
    "label": "Food price monitoring tool",
    "source": "ESTAT",
    "updated": "2022-04-12T11:00:00+0200",
    "value": {
`
const part2 = `
    },
    "status": {},
    "id": [
        "freq",
        "unit",
        "indx",
        "coicop",
        "geo",
        "time"
    ],
    "size": [
        1,
        2,
        4,
        26,
        32,
        ${totMonthsBack}
    ],
    "dimension": {
        "freq": {
            "label": "Time frequency",
            "category": {
                "index": {
                    "M": 0
                },
                "label": {
                    "M": "Monthly"
                }
            }
        },
        "unit": {
            "label": "Unit of measure",
            "category": {
                "index": {
                    "I15": 0,
                    "PCH_M12": 1
                },
                "label": {
                    "I15": "Index, 2015=100",
                    "PCH_M12": "Percentage change m/m-12"
                }
            }
        },
        "indx": {
            "label": "Index",
            "category": {
                "index": {
                    "PPI": 0,
                    "HICP": 1,
                    "ACPI": 2,
                    "IPI": 3
                },
                "label": {
                    "PPI": "Producer price index",
                    "HICP": "Harmonised index of consumer prices",
                    "ACPI": "Agricultural commodity price index",
                    "IPI": "Import price index"
                }
            }
        },
        "coicop": {
            "label": "Classification of individual consumption by purpose (COICOP)",
            "category": {
                "index": {
                    "CP011": 0,
                    "CP0111": 1,
                    "CP01113": 2,
                    "CP0112": 3,
                    "CP01121": 4,
                    "CP01122": 5,
                    "CP01123": 6,
                    "CP01124": 7,
                    "CP0113": 8,
                    "CP0114": 9,
                    "CP01141": 10,
                    "CP01144": 11,
                    "CP01145": 12,
                    "CP01147": 13,
                    "CP0115": 14,
                    "CP01151": 15,
                    "CP01153": 16,
                    "CP01154": 17,
                    "CP0116": 18,
                    "CP0117": 19,
                    "CP01174": 20,
                    "CP01181": 21,
                    "CP0121": 22,
                    "CP01223": 23,
                    "CP02121": 24,
                    "CP0213": 25
                },
                "label": {
                    "CP011": "Food",
                    "CP0111": "Bread and cereals",
                    "CP01113": "Bread",
                    "CP0112": "Meat",
                    "CP01121": "Beef and veal",
                    "CP01122": "Pork",
                    "CP01123": "Lamb and goat",
                    "CP01124": "Poultry",
                    "CP0113": "Fish and seafood",
                    "CP0114": "Milk, cheese and eggs",
                    "CP01141": "Fresh whole milk",
                    "CP01144": "Yoghurt",
                    "CP01145": "Cheese and curd",
                    "CP01147": "Eggs",
                    "CP0115": "Oils and fats",
                    "CP01151": "Butter",
                    "CP01153": "Olive oil",
                    "CP01154": "Other edible oils",
                    "CP0116": "Fruit",
                    "CP0117": "Vegetables",
                    "CP01174": "Potatoes",
                    "CP01181": "Sugar",
                    "CP0121": "Coffee, tea and cocoa",
                    "CP01223": "Fruit and vegetables juices",
                    "CP02121": "Wine from grapes",
                    "CP0213": "Beer"
                }
            }
        },
        "geo": {
            "label": "Geopolitical entity (reporting)",
            "category": {
                "index": {
                    "EU27_2020": 0,
                    "EA19": 1,
                    "BE": 2,
                    "BG": 3,
                    "CZ": 4,
                    "DK": 5,
                    "DE": 6,
                    "EE": 7,
                    "IE": 8,
                    "EL": 9,
                    "ES": 10,
                    "FR": 11,
                    "HR": 12,
                    "IT": 13,
                    "CY": 14,
                    "LV": 15,
                    "LT": 16,
                    "LU": 17,
                    "HU": 18,
                    "MT": 19,
                    "NL": 20,
                    "AT": 21,
                    "PL": 22,
                    "PT": 23,
                    "RO": 24,
                    "SI": 25,
                    "SK": 26,
                    "FI": 27,
                    "SE": 28,
                    "IS": 29,
                    "NO": 30,
                    "CH": 31
                },
                "label": {
                    "EU27_2020": "European Union - 27 countries (from 2020)",
                    "EA19": "Euro area - 19 countries  (from 2015)",
                    "BE": "Belgium",
                    "BG": "Bulgaria",
                    "CZ": "Czechia",
                    "DK": "Denmark",
                    "DE": "Germany (until 1990 former territory of the FRG)",
                    "EE": "Estonia",
                    "IE": "Ireland",
                    "EL": "Greece",
                    "ES": "Spain",
                    "FR": "France",
                    "HR": "Croatia",
                    "IT": "Italy",
                    "CY": "Cyprus",
                    "LV": "Latvia",
                    "LT": "Lithuania",
                    "LU": "Luxembourg",
                    "HU": "Hungary",
                    "MT": "Malta",
                    "NL": "Netherlands",
                    "AT": "Austria",
                    "PL": "Poland",
                    "PT": "Portugal",
                    "RO": "Romania",
                    "SI": "Slovenia",
                    "SK": "Slovakia",
                    "FI": "Finland",
                    "SE": "Sweden",
                    "IS": "Iceland",
                    "NO": "Norway",
                    "CH": "Switzerland"
                }
            }
        },
        "time": {
            "label": "Time",
            "category": {
                "index": {
`
const part3 = `
                },
                "label": {
`

const part4 = `
                }
            }
        }
    }
}
`