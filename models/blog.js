const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    blog_title: {
        required: true,
        type: String,
        maxlength: 100
    },
    blog_tags: {
        type: String
    },
    intro: {
        type: String,
        required: true
    },
    subheading_1: {
        type: String
    },
    description_1: {
        type: String,
        required: true
    },
    subheading_2: {
        type: String
    },
    description_2: {
        type: String,
        // required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer'
    },
    posting_time: {
        type: String,
    }
    //author
    //date and time
})

module.exports = mongoose.model("Blog", BlogSchema);