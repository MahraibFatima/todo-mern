const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

router.post("/add", async (req, res) => {
  try {
    const { title, description, id } = req.body;
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const list = new List({
      title,
      description,
      user: existingUser._id,
    });

    await list.save();
    existingUser.lists.push(list._id);
    await existingUser.save();

    res.status(201).json({ list });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error adding list",
      error: error.message,
    });
  }
});

//update list
router.put("/update/:id", async (req, res) => {
  try {
    const {title, description, id} = req.body;
    const existingUser = await User.findOne({id});
    if(existingUser){
        const list = await List.findByIdAndUpdate(req.params.id, {
            title,
            description
        });
        list.save().then(()=>{
            res.status(200).json({message: "List updated successfully"});
        })
    }
  } catch (error) {
    res.status(400).json({
      message: "Error updating list",
      error: error.message,
    });
  }});

// delete list
router.delete("/delete/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    const deletedTodo = await List.findByIdAndDelete(todoId);
    
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(400).json({
      message: "Error deleting list",
      error: error.message,
    });
  }
});

//get all lists of a user
router.get("/get/:id", async (req, res) => {

   try{
     const list = await List.find({user:req.params.id}).sort({createdAt:-1});
    res.status(200).json({list});
    if(!list){
        res.status(200).json({message: "No lists found"});
    }
   }catch(error){ 
    
    res.status(400).json({
      message: "Error fetching lists",
      error: error.message,
    });
     }

});


module.exports = router;