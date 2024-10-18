const en = {
  common: {
    ok: "Continue!",
    cancel: "Cancel",
    back: "Back",
    refresh: "Refresh",
    loading: "Data is fetching..."
  },
  homeScreen:{
    title: "Home",
    task: 'Go to tasks',
    list:  'Go to list'
  },
  taskScreen:{
    title: "Tasks",
    empty: 'No tasks',
    new: "New task",
    create: "Create new task",
    placeholder: "Insert new Task"
  },
  userScreen:{
    title: "Users",
    empty: 'No users',
  },
  errorApi:{
    timeout: "Timeout", 
    cannotConnect: "Cannot connect", 
    server: "Server error",
    unauthorized: "Unauthorized", 
    forbidden: "Forbidden", 
    notFound: "Not found", 
    rejected: "Rejected", 
    unknown: "Unknown",
    badData: "Bad data",
    "400": "Not Found"
  },
  error:{
    title:"This screen doesn't exist.",
    description: "Go to home screen!"
  }
}

export default en
export type Translations = typeof en
