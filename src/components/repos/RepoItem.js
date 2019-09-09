import React from 'react'

const RepoItem = ({repo}) => {
    return (
        <div className="card ">
            <h3>
                <a 
                    className="text-dark"
                    target="_blank"
                    href={repo.html_url}
                >
                    {repo.name}
                </a>
            </h3>
        </div>
    )
}

export default RepoItem
