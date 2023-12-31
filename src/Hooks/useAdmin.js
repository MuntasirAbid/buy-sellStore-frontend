import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:10000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setIsAdmin(data)
                    setIsAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;