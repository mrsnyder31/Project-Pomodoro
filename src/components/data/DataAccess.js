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

export const DeleteProject = () => {
    return fetch("http://localhost:8088/projects"), {method: "DELETE"}
}

export const DeleteTask = () => {
   return fetch("http://localhost:8088/tasks"), {method: "DELETE"}
}

export const EditProject = () => {
    return fetch("http://localhost:8088/projects"), {method: "PUT"}
}

export const EditTask = () => {
    return fetch("http://localhost:8088/tasks"), {method: "PUT"}
}