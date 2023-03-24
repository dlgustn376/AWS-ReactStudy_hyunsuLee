/** @jsxImportSource @emotion/react */
import React from 'react';
import Icon from "awesome-react-icons/lib/cjs/Icon";
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';

import { GrTest } from 'react-icons/gr';
import { HiHome } from 'react-icons/hi';
import { IoIosCalendar } from 'react-icons/io';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

import * as S from './Style'

const MainAside = () => {
    const navigate = useNavigate();

    return (
        <aside css={S.style}>
            <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
                navigate(itemId);
            }}
            items={[
                {
                    title: 'Home',
                    itemId: '/',
                    elemBefore: () => <HiHome />
                },
                {
                    title: 'T1',
                    itemId: '/t1',
                    elemBefore: () => <IoIosCalendar />
                },
                {
                    title: 'T2',
                    itemId: '/t2',
                    elemBefore: () => <GrTest />
                },
                {
                    title: 'Sample',
                    itemId: '/sample/input/1',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: 'input',
                            itemId: '/sample/input/1',
                            elemBefore: () => <BiListCheck />    
                        }
                    ]
                },
                {
                    title: 'List',
                    itemId: '/users',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: '사용자 전체 조회',
                            itemId: '/sample/input/1',
                            elemBefore: () => <FaUser />    
                        }
                    ]
                },
            ]}
          />
        </aside>
    );
};

export default MainAside;