const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.options('*', cors());


app.listen(3000, () => {
    console.log("Server is running")
})


app.post("/bfhl",(req,res)=>{

    const {data} = req.body;

    console.log("hit the api")

    if(!data || !typeof(data)=='Object')
    {
        console.log("Invalid array")
        return res.status(402).json("Invalid array");
    }

    user_id = "21BCE1649_18072003"

    email = "anish.joshi@vitstudent.ac.in"

    roll_number= "ABCD123"

    nums= []
    alpha = []
    lower =[]

    data.forEach(char => {
        if (!isNaN(char)) {
            nums.push(char);
        } else if (char.match(/^[a-zA-Z]$/)) {
            alpha.push(char);
            lower.push(char)
        }
    });


    highest_alpha= [];

    const highest_lowercase = lower.length > 0
        ? lower.reduce((a, b) => a > b ? a : b)
        : null;

    highest_alpha.push(highest_lowercase)
    // const highest_uppercase = alpha.length > 0
    //     ? alpha.reduce((a, b) => a > b ? a : b)
    //     : null;

    return res.status(200).json({
        "is_success":true,
        user_id,
        email,
        roll_number,
        "numbers":nums,
        "alphabets":alpha,
        "highest_lowercase_alphabet":highest_alpha
    }
    )
})

