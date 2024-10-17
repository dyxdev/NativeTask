import * as Yup from "yup"

export const taskSchema = Yup.object({
    description:Yup.string().required("You must define a task name")
})