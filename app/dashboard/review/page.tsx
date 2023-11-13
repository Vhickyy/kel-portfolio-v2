import React from 'react'

const reviews = [
  {
    name:"vee",
    position: "boss",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi maiores ipsum? Voluptas tenetur error est cupiditate consectetur corrupti, perferendis enim quaerat tempore ab ea necessitatibus earum labore fugit iste hic, deleniti natus porro fuga doloremque. Sit nemo beatae pariatur"
  },
  {
    name:"vee",
    position: "boss",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi maiores ipsum? Voluptas tenetur error est cupiditate consectetur corrupti, perferendis enim quaerat tempore ab ea necessitatibus earum labore fugit iste hic, deleniti natus porro fuga doloremque. Sit nemo beatae pariatur"
  },
  {
    name:"vee",
    position: "boss",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi maiores ipsum? Voluptas tenetur error est cupiditate consectetur corrupti, perferendis enim quaerat tempore ab ea necessitatibus earum labore fugit iste hic, deleniti natus porro fuga doloremque. Sit nemo beatae pariatur"
  },
  {
    name:"vee",
    position: "boss",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi maiores ipsum? Voluptas tenetur error est cupiditate consectetur corrupti, perferendis enim quaerat tempore ab ea necessitatibus earum labore fugit iste hic, deleniti natus porro fuga doloremque. Sit nemo beatae pariatur"
  },
]
function review() {
  return (
    <div className='text-gray-500 pt-6 pb-10'>
      <div className='text-inverse flex gap-3 cursor-pointer'>
        <h1>Reviewers</h1>
        <h1>Reviews</h1>
      </div>
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {reviews.map((review,index)=>{
          return (
            <div key={index} className='bg-bgGray text-center py-6 px-4 grid gap-4 rounded-lg'>
              <div className=''>
                <h5>{review.name}</h5>
                <p>{review.position}</p>
              </div>
              <p>{review.review}</p>
              <div className='flex justify-end gap-2'>
                <button className='bg-green-500 px-4 py-2 rounded'>Approve</button>
                <button className='bg-red-500 px-4 py-2 rounded'>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default review