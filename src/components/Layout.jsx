import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Loader } from './Loader/Loader'

const Layout = () => {
	return (
		<StyledWrapper>
            <StyledHeader>
                <nav>
					<StyledNavLink to='/'>Home</StyledNavLink>
					<StyledNavLink to='/movies'>Movies</StyledNavLink>
				</nav>
			</StyledHeader>
			<StyledMainContent>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</StyledMainContent>
		</StyledWrapper>
	)
}

export default Layout

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 40px;
	background-color: lightgray;
	font-size: 1.1rem;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
	nav {
		display: flex;
		gap: 10px;
	}
`

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: black;
	font-weight: 700;
	font-size: 1.5rem;
	margin-right: 5px;
	&.active {
		color: orangered;
		text-decoration: underline;
	}
`
const StyledMainContent = styled.div`
	flex-grow: 1;
`
const StyledWrapper = styled.div`
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	gap: 10px;
`
