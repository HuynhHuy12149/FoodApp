import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <form action="" className="md:p-8 w-full max-w-md rounded-lg  border border-gray-200 mx-4 ">
                <Label>Email:</Label>
                <Input type="email" placeholder="Email" />
                <Label>Password:</Label>
                <Input type="passwword" placeholder="password" />
            </form>
        </div>
    )
}

export default Login