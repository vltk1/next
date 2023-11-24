import { Font } from '../Font';

export function UnorderedLists({label, size, line, bold, color, className="", tag="" }:Typography) {
    return (
        <>
            <ul>
                <li>List item with a much longer description or more content.</li>
                <li>List item</li>
                <li>List item
                    <ul>
                    <li>Nested list item</li>
                    <li>Nested list item</li>
                    <li>Nested list item</li>
                    </ul>
                </li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ul>
        </>
    );
}