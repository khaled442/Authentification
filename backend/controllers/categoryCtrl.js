const Category = require('../models/categoryModel')




const categoryCtrl = {
    getCategories: async(req,res)=>{
        try {
            const categories = await Category.find()
            res.json(categories) 
        } catch (error) {
           return res.status(500).json({msg : error.message})
        }
    },
    createCategory: async(req,res)=> {
        try {
            const {name} = req.body
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "this category already exist"})

            const newCategory = new Category({name})

            await newCategory.save()
            res.json({msg : "created a category"})
        } catch (error) {
            return res.status(500).json({msg : error.message})

        }
    },
    deleteCategory: async(req,res)=> {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg: "deleted a category "})
        } catch (error) {
            return res.status(500).json({msg : error.message})

        }
    },
    updateCategory: async(req,res)=> {
        try {
            const {name} = req.body
            await Category.findOneAndUpdate({_id: req.params.id}, {name})

            res.json({msg: "Upadated a category"})
        } catch (error) {
            return res.status(500).json({msg : error.message})

        }
    }
}



module.exports = categoryCtrl