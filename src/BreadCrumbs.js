import React from 'react';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';

const itemsWithHeading = [
    { text: 'Blog', key: 'Files' },
    { text: 'Interests', key: 'd1' },
    { text: 'Tech', key: 'd2', isCurrentItem: true, as: 'h4' },
];

function BreadCrumbs() {
    return (
        <Breadcrumb
            items={itemsWithHeading}
            ariaLabel="With last item rendered as heading"
            overflowAriaLabel="More links"
        />
    );
}

export default BreadCrumbs;
