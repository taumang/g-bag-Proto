import React from 'react';

const Login = (props)=>{

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        accountExist,
        setAccountExist,
        emailError,
        passwordError

    }= props

    return(
        <section className="min-h-screen flex flex-col justify-center bg-gradient-to-bl  from-red-500 to-yellow-500 ... ">
           
            <div className="p-60 m-auto w-auto flex justify-center flex-col bg-gray-50 rounded-3xl shadow md:shadow-lg">
            
                <label className=" text-black m-px14 block text-base leading-none">Username</label>

                <input
                type="text"
                autoFocus
                required
                value={email}
                onChange = {(event)=>setEmail(event.target.value)}
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                />
                <div className="h-10 ml-3">

                <p className=" text-red-700 m-px14 block text-base leading-none">{emailError}</p>
                </div>

                <label className=" text-black m-px14 block text-base leading-none">Password</label>

                <input
                type="password"
                required
                value={password}
                onChange = {(event)=>setPassword(event.target.value)}
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md"
                />

                <p className=" text-red-700 text-base">{passwordError}</p>
                
                <div className="w-full p-6">
                {accountExist ? (
                    <>
                    <button onClick={handleLogin} 
                            className="w-full py-2 px-4 transition duration-500 ease-in-out bg-blue-500 hover:bg-purple-500  rounded-md text-white "
                            type="button"
                    >Login</button>
                    <p className=" mt-4 text-right ">Need an account<span onClick={()=>setAccountExist(!accountExist)} 
                                                                            className="cursor-pointer transition duration-500 ease-in-out text-purple-700 hover:text-blue-400 font-bold"> Sign Up</span></p>
                    </>
                ):(
                <>
            
                <button onClick={handleSignUp}
                        className="w-full py-2 px-4 transition duration-500 ease-in-out bg-blue-500 hover:bg-purple-500  rounded-md text-white "
                        type="button"
                        >Sign Up</button>
                
            
                <p>Do you have an account<span onClick={()=>setAccountExist(!accountExist)} 
                    className="cursor-pointer transition duration-500 ease-in-out text-purple-700 hover:text-blue-400 font-bold"> Login</span></p>
                </>
                )}
                </div>
            </div>
        </section>
    )
}

export default Login