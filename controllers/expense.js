const Expense = require('../models/expense');


exports.getExpense = async(req,res,next) =>{
    try{
        const data = await Expense.findAll()
        res.status(200).json({expense:data});
    }catch(err){
        res.status(500).json({'err':err})
    }
}


exports.postExpense = async(req,res,next) =>{
    const amount = req.body.expenseData.amount;
    const description = req.body.expenseData.description;
    const category = req.body.expenseData.category;

    const data = await Expense.create({
        amount: amount,
        description: description,
        category: category
    })
    res.status(201).json(data);
}

exports.postDelete = async(req,res,next) =>{
    try{
        const exId = req.params.id;
        await Expense.destroy({where:{id: exId}});
    res.sendStatus(200);
    }catch(err){
        console.log(err)
    }
}


exports.postEdit = async(req,res,next) =>{
    try{
        const exId = req.params.id;
        const upAmount = req.body.upExpenseData.amount;
        const upDescription = req.body.upExpenseData.description;
        const upCategory = req.body.upExpenseData.category;
        Expense.destroy({where :{id: exId}})
        // .then((res)=>{
        //     res.amount = upAmount;
        //     res.description = upDescription;
        //     res.category = upCategory;
        //     // Expense.save();
        // })
        // .catch()
        // // res.status(200).json(data);

    }catch(err){
        console.log(err)
    }
}