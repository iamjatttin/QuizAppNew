import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/actions/userAction';

const Results = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const { users } = useSelector((state) => state.allUsers);
    const { Questions } = useSelector((state) => state.Questions);


    useEffect(() => {
        dispatch(getAllUsers());
      }, [dispatch]);
    


  return (
    <>
        {/* {loading && <BackdropLoader />} */}
        <div className="mb-40 mt-10 flex justify-center ">
            <div className="h-auto w-2/5 rounded-xl overflow-hidden shadow-lg p-5 divide-y" style={{backgroundColor:"#fff"}}>
                <div className="flex justify-between">
                    <h3 className=''>Other Results</h3>
                                      
                </div>
                {users.map((user) => (<>
                         <hr />
                         <div className="flex justify-between  ">
                             <div>
                                 <h3 className=''>{user.name}</h3>                  
                                 <p className='-mt-4 text-gray-500'>{user.email}</p>
                             </div>
                             <div>
                                 <h3 className=''>{user.score}/{Questions.length}</h3>                  
                             </div>
                         </div>
                         </>
                    ))
                    }
               

            </div>
        </div>
    </>
  )
}

export default Results

