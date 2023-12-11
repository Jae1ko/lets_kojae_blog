import Image from 'next/image';
import React from 'react';

import { profileText } from '@/constants';

const Profile = () => {
    return (
        <section id="profile">
            <div className="profile_inner">
                <h2 className="profile_title">{profileText.title}</h2>
                <div className="profile_lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="profile_text">
                    <div className="text">
                        <div>{profileText.desc[0]}</div>
                        <div>{profileText.desc[1]}</div>
                        <div>{profileText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <Image
                            src={profileText.img}
                            alt="어바웃"
                            width={300}
                            height={300}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
