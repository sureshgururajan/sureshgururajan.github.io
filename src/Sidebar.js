import React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from 'office-ui-fabric-react';

initializeIcons();

const navStyles = { root: { width: 200 } };

const navLinkGroups = [
    {
        name: "Interests",
        expandAriaLabel: 'Expand Interests section',
        collapseAriaLabel: 'Collapse Interests section',
        url: "#",
        links: [
            { name: 'Tech', url: 'http://example.com', key: 'key1', target: '_blank' },
            { name: 'Gaming', url: 'http://example.com', key: 'key2', target: '_blank' },
            { name: 'Engineering', url: 'http://example.com', key: 'key3', target: '_blank'}        
        ],
        isExpanded: true,
    },
    {
        name: "Labels",
        expandAriaLabel: 'Expand Labels section',
        collapseAriaLabel: 'Collapse Labels section',
        url: "#",
        links: [
            { name: 'Tech', url: 'http://example.com', key: 'key4', target: '_blank' },
            { name: 'Gaming', url: 'http://example.com', key: 'key5', target: '_blank' },
            { name: 'Engineering', url: 'http://example.com', key: 'key6', target: '_blank'}        
        ],
        isExpanded: true,
    },
];

export function Sidebar() {
    return (
        <Nav styles={navStyles} groups={navLinkGroups} selectedKey="key1" ariaLabel="Nav basic example" />
    );
};

export default Sidebar;
