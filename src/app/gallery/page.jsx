

import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div className="min-h-screen px-12 py-12">
            <h6 className="text-3xl mb-12">Gallery Image</h6>
            <Image src="/images/pexels-padrinan-194094.jpg" alt="A beautiful scene" height={1080} width={1920} />
        </div>
    );
};

export default GalleryPage;
