import React, {useState} from 'react';

const FunctionalBased = () => {
    const [loadingMessage, setLoadingMessage] = useState("loading");
    const [status, setStatus] = useState("Code Red");
    return (
        <div>
            <h1>Functional Component</h1>
            {loadingMessage}
            {status}
            <button onClick={() => setLoadingMessage("finished")}>Finished Loading</button>
            <button onClick={() => setStatus("Code Green")}>Status</button>
        </div>
    );
};

export default FunctionalBased;
