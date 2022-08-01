import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {
    Dehaze as MenuIcon,
    DarkMode as DarkmodeIcon,
    LightMode as LightmodeIcon,
} from '@mui/icons-material';

import useMatchBreakpoints from '../../hooks/useMatchBreakpoints';
import { Text } from '../Foundation';
import useStore from '../../state/store';
import { Post } from '../../types/post';
import { baseColors } from '../../styles/colors';
import SearchBar from '../Searchbar';

type SearchResultType = {
    posts: Array<Post>
}
const Appbar = ({handleMobileMenu, onThemeToggle, isDarkMode}: {
    handleMobileMenu?: (open?: boolean) => void, 
    onThemeToggle: () => void,
    isDarkMode?: boolean
}) => {
    const store = useStore();
    const searchbarRef = useRef(null);
    const { isMobile } = useMatchBreakpoints();
    const [searchKey, setSearchKey] = useState('')
    const [searchResults, setSearchResults] = useState<SearchResultType>({
        posts: []
    })
    const [showResults, setShowResults] = useState(false)
    
    const changeHandler = useCallback((input: string) => {
        setSearchKey(input)
        if (handleMobileMenu) {
            handleMobileMenu(false)
        }
      }, [handleMobileMenu])

    const filterData = useCallback(() => {
    if (searchKey) {
        const lowercaseQuery = searchKey.toLowerCase();
        const _posts = store.posts.filter(post => {
            // const hasCollection = nft.collection.includes(lowercaseQuery)
            const hasName = post.title.includes(lowercaseQuery)
            const hasAddress = post.solContractAddress 
                ? post.solContractAddress.includes(lowercaseQuery)
                : post.solMintAddress
                    ? post.solMintAddress.includes(lowercaseQuery)
                    : false

            if (hasName || hasAddress) {
                        return post
                    }
                    return null;
        })

        // const _collections: NFTCollection[] = store.collections.filter(c => {
        //     const hasName = c.collectionDict.name?.includes(lowercaseQuery)
        //     const hasIssuer = c.issuer?.issuer?.includes(lowercaseQuery)

        //     if (hasName || hasIssuer) {
        //                 return c
        //             }
        //             return null;
        // })

        setSearchResults({
            posts: _posts,
        })
        
    } else {
        setSearchResults({
            posts: [],
        })
    }
    }, [searchKey, store.posts])

    useEffect(() => {
        filterData()
    }, [filterData])

    useEffect(() => {
        setShowResults(searchResults.posts.length > 0)
    }, [searchResults.posts.length])

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            // @ts-ignore
            if (searchbarRef?.current && !searchbarRef.current.contains(event.target)) {
                setShowResults(false)
               
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [searchbarRef])

    const toggleMobileMenu = () => {
        setShowResults(false)
        handleMobileMenu!()
    }
      
    return (
        <HeaderWrapper>
            <LogoWrapper to="/">
                <img width={isMobile ? '35px' : '50px'} src='./logo.png' alt="social-logo" />
            </LogoWrapper>
            <div ref={searchbarRef} style={{minWidth: '200px', maxWidth: '500px', position: 'relative'}}>
                <SearchBar changeHandler={changeHandler}/>
                {/* { 
                    (searchResults.posts.length > 0)
                        && showResults
                        ? (<SearchResults searchResults={searchResults}/>)
                        : (<></>)
                } */}
            </div>
            <ThemeToggle onClick={onThemeToggle}>
        
                {isDarkMode && <DarkmodeIcon />}
                {!isDarkMode && <LightmodeIcon />}
            </ThemeToggle>
            <div style={{position: 'relative'}}>
                {
                    isMobile 
                        ? (
                            <NavButtons onClick={toggleMobileMenu}>
                                <MenuIcon />
                            </NavButtons>
                        ) 
                        : (
                            <NavButtons>
                                <Link className="menu-item" to="/">
                                    <Text color={baseColors.primary} bold>Marketplace</Text>
                                </Link>
                                <Link className="menu-item" to="/profile">
                                    <Text color={baseColors.primary} bold>Profile</Text>
                                </Link>
                            </NavButtons>
                        )
                }
            </div>
           
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 80px;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    grid-gap: 16px;
    justify-content: space-between;
    background: #fff;
    z-index: 50;
    position: fixed;
    top:0;

    @media(min-width: 638px) {
        position: unset;
    }
`;

const LogoWrapper = styled(Link)`
    padding: 16px;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    svg {
        
        text-align: left;
    }
`;

const ThemeToggle = styled.div`
    cursor: pointer;
`;

const NavButtons = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    grid-gap: 64px;
    margin-right: 48px;

    .menu-item {
        text-decoration: none; 
    }

    svg {
        width: 25px;
        height: 25px;
    }

    @media(max-width: 638px) {
        background: transparent;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 16px;
        transition: background ease-in-out 0.2s;

        &:hover {
            background: #fff;
            transition: background ease-in-out 0.2s;
        }

        &:active {
            background: #fff;
            transition: background ease-in-out 0.2s;
        }
    }
`;

export default Appbar;