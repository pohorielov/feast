import React from "react";
import Typed from "typed.js";

export const TypedText = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Для фотографів.',
                'Для ведучих.',
                'Для відеографів.',
                'Для музикантів.',
                'Для декораторів.',
                'Для всіх, хто створює свято.',
            ],
            typeSpeed: 100,
            backSpeed: 100,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="wrap">
            <div className="type-wrap">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
        </div>
    )
}