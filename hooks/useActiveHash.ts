import { useState, useEffect, useRef } from "react";

/**
 * A hook to determine which section of the page is currently in the viewport.
 * @param {*} itemIds Array of document ids to observe
 * @param {*} rootMargin
 * @returns id of the element currently in viewport
 */
export const useActiveHash = (itemIDs: string[], rootMargin = `0% 0% -40% 0%`) => {
    const headingElementsRef = useRef({});
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        const callback = (entries) => {
            headingElementsRef.current = entries.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current);

            let visibleHeadings = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const element = headingElementsRef.current[key];
                if (element.isIntersecting) {
                    visibleHeadings.push(element);
                }
            });
            
            // visibleHeadings.sort(
            //     (a, b) => itemIDs.findIndex(a.target.id) - itemIDs.findIndex(b.target.id)
            // );

            if (visibleHeadings.length>0) {
                setActiveHash(visibleHeadings[visibleHeadings.length-1].target.id);
            }
        };

        const observer = new IntersectionObserver(
            callback,
            { rootMargin: rootMargin }
        );


        itemIDs.forEach((id) => {
            if (document.getElementById(id) !== null) {
                observer.observe(document.getElementById(id));
            }
        });

        return () => {
            itemIDs?.forEach((id) => {
                if (document.getElementById(id) !== null) {
                    observer.unobserve(document.getElementById(id));
                }
            });
            observer.disconnect();
        }

    }, [itemIDs, rootMargin]);
    return activeHash;
}