import Note from "../models/Note.js";

export async function getALlnotes(req,res){
   try{
    const notes=await Note.find().sort({createdAt:1});
    res.status(200).json(notes);
   }catch(error){
    res.status(500).json({message:error.message});
   }
}

export async function postNotes(req,res){
    try{
        const {title,content}=req.body;
        const newNote=new Note({title,content});
        await newNote.save();
        res.status(201).json(`Note with id ${newNote._id} has been created`);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export async function putNotes(req,res){
   try {
    const {id}=req.params;
    const {title,content}=req.body;
    const updateNote=await Note.findByIdAndUpdate(id,{title,content},{new:true});
    res.status(200).json(`Note with id ${id} has been updated`);
   }catch(error){
    res.status(500).json({message:error.message});
   }
}

export async function deleteNotes(req,res){
    try{
        const{id}=req.params;
        const deletenote=await Note.findByIdAndDelete(id);
        res.status(200).json(`Note with id ${id} has been deleted`);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export async function getNoteById(req,res){
    try{
        const{id}=req.params;
        const note=await Note.findById(id);
        res.status(200).json(`Note with id ${id} has been fetched successfully ${note}`);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}