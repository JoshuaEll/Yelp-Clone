const { Pool } = require('pg')

const fs = require("fs");

var filePath = process.argv.slice(2)[0];

//const filePath = "C:\\Users\\josh_\\Downloads\\yelp_dataset.tar\\yelp_dataset\\yelp_academic_dataset_business.json"

var stream = fs.createReadStream(filePath, {flags: 'r', encoding: 'utf-8'});
var buf = '';


// REDO BUSINESS TABLE WITH VARCHAR OF > 50

async function close(){
    console.log("here")
    if (!client) return false
    await client.end();
    client = undefined;
    return true;
}

const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'yelp',
        password: 'temp',
        port: 5432,
    })
stream.on('data', function(d) {
    buf += d.toString(); // when data is read, stash it in a string buffer
    pump(); // then process the buffer
})

function pump() {
    var pos;
    
    while ((pos = buf.indexOf('\n')) >= 0) { // keep going while there's a newline somewhere in the buffer
        if (pos == 0) { // if there's more than one newline in a row, the buffer will now start with a newline
            buf = buf.slice(1); // discard it
            continue; // so that the next iteration will start with data
        }
        processLine(buf.slice(0,pos)); // hand off the line
        buf = buf.slice(pos+1); // and slice the processed data off the buffer
    }
}

async function processLine(line) { // here's where we do something with a line
    
    if (line[line.length-1] == '\r') line=line.substr(0,line.length-1); // discard CR (0x0D)

    if (line.length > 0) { // ignore empty lines
        var obj = JSON.parse(line); // parse the JSON
        if (filePath.includes("yelp_academic_dataset_business.json")){
            //database stuff
            //console.log(obj)
            //PROBLEM HERE FOR SOME REASON CLIENT IS CLOSED
            const values = [obj.business_id, obj.name, obj.address, obj.city, 
                obj.state, obj.postal_code, obj.latitude, obj.longitude, obj.stars, obj.review_count, obj.is_open, obj.attributes, obj.hours]
            //console.log(values);
            pool.query(`Insert into Business (business_id, name, address, city, state, postal_code, latitude, longitude, stars, review_count, is_open, attributes, hours)
            values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, values)
            //done
        }
        if (filePath.includes("yelp_academic_dataset_business2.json")){
            const values2 = [obj.business_id, obj.categories]
            //console.log(values);
            pool.query(`Insert into business_category (business_id, categories)
            values ($1, $2)`, values2)
            //done
        }
        if (filePath.includes("photos.json")){
            const values = [obj.photo_id, obj.business_id, obj.caption, obj.label]
            pool.query(`Insert into photos (photo_id, business_id, caption, photo_label) values ($1, $2, $3, $4)`, values)
        }
        if (filePath.includes("yelp_academic_dataset_checkin.json")){

            const values = [obj.business_id, obj.date]
            //console.log(values);
            pool.query(`Insert into checkin (business_id, checkin_times)
            values ($1, $2)`, values)
            //done
        }
        if (filePath.includes("yelp_academic_dataset_tip.json")){
            const values = [obj.text, obj.date, obj.compliment_count, obj.business_id, obj.user_id]
            pool.query(`Insert into tip (tip_text, tip_date, likes, business_id, user_id) values ($1, $2, $3, $4, $5)`, values)
        }
        if (filePath.includes("yelp_academic_dataset_review.json")){
            const values = [obj.review_id, obj.user_id, obj.business_id, obj.stars, obj.date, obj.text, obj.useful, obj.funny, obj.cool]
            //console.log(values);
            pool.query(`Insert into review (review_id, user_id, business_id, stars, review_date, review_text, useful, funny, cool)
            values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, values)
            //STILL NEEDS TO BE DONE
        }
        if (filePath.includes("yelp_academic_dataset_tip.json")){
            //database stuff
        }
        if (filePath.includes("yelp_academic_dataset_user.json")){
            const values = [obj.user_id, obj.name, obj.review_count, obj.yelping_since, obj.friends, obj.useful, obj.funny, obj.cool, obj.fans, obj.elite, obj.average_stars, obj.compliment_hot, obj.compliment_more, 
                obj.compliment_profile, obj.compliment_cute, obj.compliment_list, obj.compliment_note, obj.compliment_plain, obj.compliment_cool, obj.compliment_funny, obj.compliment_writer, obj.compliment_photos]
            //console.log(values);
            pool.query(`Insert into _user (user_id, name, review_count, yelping_since, friends, useful, funny, cool, fans, elite, average_stars, compliment_hot, compliment_more, compliment_profile, compliment_cute, compliment_list, compliment_note, 
                compliment_plain, compliment_cool, compliment_funny, compliment_writer, compliment_photos)
                values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)`, values)
      //done
        }
        if (filePath.includes("yelp_academic_dataset_user2.json")){
            const values = [obj.user_id, obj.elite]

            pool.query(`Insert into user_elite (user_id, elite_year) values ($1, $2)`, values)
        }
        if (filePath.includes("yelp_academic_dataset_user3.json")){
            obj.friends = "{" + obj.friends + "}"
            const values = [obj.user_id, obj.friends]
            pool.query(`Insert into user_friends (user_id, user_friend) values ($1, $2)`, values)
        }
        
       
    }
}
