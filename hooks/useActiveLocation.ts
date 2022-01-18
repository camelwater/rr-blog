import React, { useState, useEffect } from "react";

const getActiveLocation = () => {
    return window.location.pathname;
}

const useActiveLocation = () => {
    const [path, setPath] = useState<string>('');

    useEffect(() => {
        setPath(getActiveLocation());

    }, []);
    return path;
}

export default useActiveLocation