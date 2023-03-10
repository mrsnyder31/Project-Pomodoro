export const PostProject = (projectObject) => {
    fetch("http://localhost:8088/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(projectObject)
    })
}

export const PostTask = (taskObject) => {
    fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskObject)
    })
    
}

export const FetchTasks = () => {
   return fetch("http://localhost:8088/tasks")
   .then(res => res.json())
}

export const FetchProjects = () => {
   return fetch("http://localhost:8088/projects")
   .then(res => res.json())
}

export const DeleteProject = (id) => {
    return fetch(`http://localhost:8088/projects/${id}`, {method: "DELETE"})
}

export const DeleteTask = (id) => {
   return fetch(`http://localhost:8088/tasks/${id}`, {method: "DELETE"})

}

export const EditProject = (obj) => {
    return fetch(`http://localhost:8088/projects/${obj.id}`, 
    { 
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
}

export const EditTask = (obj) => {
    
    return fetch(`http://localhost:8088/tasks/${obj.id}`, 
    { 
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
}

export const PostUser = (customer) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
        .then(res => res.json())
}

export const FetchSettings = () => {
    return fetch("http://localhost:8088/settings")
   .then(res => res.json())
}

export const PostSettings = (settings) => {
    fetch("http://localhost:8088/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings)
    })
}

export const EditSettings = (settings) => {
    return fetch(`http://localhost:8088/settings/1`, { 
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
    })
    .then(res => res.json())
}