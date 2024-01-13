const asyncHandler = (requestHandeler) => {
    (req,res,next) =>{
        Promise.resolve().catch((err)=> next(err))
    }
}








export {asyncHandler}
/*
const  asyncHandler = (fn)=> async (req,res,next) => {
    try{

    }catch(error){
        console.log(err.code).jsdon({
            success:false,
            message:err.message
        })
    }
}*/