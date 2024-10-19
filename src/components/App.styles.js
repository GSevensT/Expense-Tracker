import styled, { keyframes } from "styled-components"
import logo from "../images/Logo.png"
import bg from "../images/Rectangle 1.png"
import { NavLink } from "react-router-dom"

const size = {
	mobile: '767px',
	tablet: '768px',
	desktop: '1157px'
}

const device = {
	mobile: `(max-width: ${size.mobile})`,
	tablet: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
}

const animation = keyframes`
	0% {opacity: 1.0}
	100% {opacity: 0.0}
`


// General Styling
export const Container = styled.div`
   width: 1200px;
   margin: 0 auto;
	border-bottom: ${props => props.$type === 'true' && '1px solid #FAFAFA1A'};
	padding: 0 5px;
	@media ${device.mobile} {
		max-width: 375px;
	};

	@media ${device.tablet} {
		max-width: 768px;
	}
`;

export const Logo = styled.div`
   height: 26px;
   width: 230px;
   background: url('${logo}') no-repeat;
	margin: 25px 0;

	@media ${device.mobile} {
		// width: 220px;
		height: 23px;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	margin: auto 0;
	
	@media ${device.mobile} {
		display: ${props => props.$type === 'users' && 'none'};
	}

	@media ${device.tablet} {
		display: ${props => props.$type === 'users' && 'none'};
	}
`;

export const Icon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   color: black;
   padding: 8px;

	@media ${device.mobile} {
		padding: 4px;
	}
`;

// Homepage
export const HomeWrapper = styled.main`
   display: flex;
   gap: 30px;
   margin-top: 40px;
	width: 100%;

	@media ${device.mobile} {
		position: relative;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
		gap: 5px;
		margin-top: 0;
		gap: 15px;
		// min-width: 318px;
	}

	@media ${device.tablet} {
		position: relative;
		flex-direction: column-reverse;
		align-items: center;
		margin-top: ${props => props.$type !== 'expense-home' ? '120px' : '50px' };
		min-width: 760px;
	}
`;

export const Background = styled.div`
   position: relative;
   background-image: url('${bg}');
   background-size: cover;
   background-repeat: no-repeat;
   background-position-x: 75%;
   min-width: 610px;
   height: 570px;
   border-radius: 20px;

	@media ${device.mobile} {
		min-width: 310px;
		height: 380px;
	}

	@media ${device.tablet} {
		min-width: 705px;
		margin: 0 20px;
		background-size: cover;
		background-position-x: 100%;
	}
`;

export const HomeDecoBlock = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 40px;
   position: absolute;
   top: 60%;
   left: -10%;
   border-radius: 20px;
   padding: 30px 23px;
   background-color: var(--white);

	@media ${device.mobile} {
		left: -2%;
		padding: 15.3px 16px;
		gap: 15px;
	}

	@media ${device.tablet} {
		width: 303px;
		left: -2%;
		// padding: 15.3px 16px;
		gap: 15px;
	}
`;

// Should've done this at the very beginning now it's a pain in the ass to change everything...

export const WrapperRow = styled.div`
	display: flex;
	align-items: center;
	gap: ${ props => 
		props.$type === 'form-radio' ? '15px' : 
		props.$type === "tran-tab" ? '90px' : '15px'
	};
	position: relative;
	
	@media ${device.mobile} {
	//tsk for some reason the or operator doesn't work aaaaaaaaaaack! I'm so sleep deprived to figure out why, so just don't mind this line of code...
		flex-direction: ${ props => 
			props.$type === 'tran-tab' ? 'column' :
			props.$type === 'table' && 'column' 
		};
		gap: ${ props => 
			props.$type === 'tran-tab' ? '14px' :
			props.$type === 'table' ? '0px' :
			props.$type === 'form-date' && '5px'
		};
	}

	@media ${device.tablet} {
		flex-direction: ${props => props.$type === 'tran-tab' && 'column'};
		gap: ${props => props.$type === 'tran-tab' && '25px'};
	}
`;

export const WrapperColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${props => 
		props.$type === 'expense-home' ? 'baseline' : 
		props.$type === 'profile' ? 'center' : 'unset' }; 
	gap: ${props => 
		props.$type === 'expense-home' ? '30px' : '0' };
	margin: ${props => 
		props.$type === 'expense-home' ? '40px 0 0 0' : '0' };
	position: ${props => props.$type === 'category' ? 'relative' : 'static' };
	
	@media ${device.mobile} {
		align-items: ${props => 
			props.$type === 'expense-home' && 'center' };

	}

	@media ${device.tablet} {
		margin-top: ${props => 
			props.$type === 'expense-home' && '0' };

	}
`;

export const MenuProfileWrapper = styled(WrapperRow)`
	padding: 0 25px;
	justify-content: space-between;
	width: 100%;
	position: absolute;
	top: 5%;

	@media ${device.tablet} {
		top: 10%;
	}
`;

export const FormButtonWrapper = styled(Wrapper)`
	flex-direction: column;
	gap: 15px;
	position: absolute;
	bottom: 15%;

	@media ${device.mobile} {
		position: relative;
		margin-top: 80px;
	}

	@media ${device.tablet} {
		position: relative;
		margin: 40px 0;
	}
`;

export const ProfileCloseIcon = styled(Icon)`
	
`;

export const ProfileWrapper = styled(Wrapper)`
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	position: relative;
	min-width: 215px;
	padding: 6px 16px;
	border-radius: 30px;
	background-color: #171719;
	cursor: pointer;
`;

export const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 10px;

	@media ${device.mobile} {
		font-size: ${props => props.$type === 'siu' && '15px'};
		width: 95%;
	}
	
	@media ${device.tablet} {
		width: 100%;
		font-size: ${props => props.$type === 'siu' && '16px'};
	}
`;

export const ExpenseHomeWrapper = styled(HomeWrapper)`
	flex-direction: column;
	margin-top: 52px;
`;

export const TotalWrapper = styled(Wrapper)`
	gap: 30px;
	
	@media ${device.mobile} {
		flex-direction: column;
		width: 95%;
		gap: 10px;
	}
`;

export const ChartWrapper = styled(Wrapper)`
	justify-content: center;
	align-items: center;
	width: 630px;
	padding: 30px;
	height: 300px;
	background-color: var(--black-two);
	border-radius: 30px;
	position: relative;

	@media ${device.mobile} {
		flex-direction: column;
		width: 95%;
		height: 470px;
		order: 4;
	}

	@media ${device.tablet} {
		order: 4;
		margin-bottom: 20px;
		width: 710px;
	}
`;

export const TextContent = styled(TextWrapper)`
   align-items: flex-start;
   gap: 20px;

	@media ${device.mobile} {
		font-size: 15px;
		gap: 10px;
	}

	@media ${device.tablet} {
		margin: 0 20px;
	}
`;

export const TotalBlock = styled(HomeDecoBlock)`
	justify-content: start;
	gap: 25px;
	position: relative;
	top: 0;
	left: 0;
	background-color: var(--black-two);
	width: 300px;

	@media ${device.mobile} {
		width: 100%;
	}

	@media ${device.tablet} {
		width: 340px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-top: 10px;
	position: relative;
	
	@media ${device.mobile} {
		padding: 10px;
	}

	@media ${device.tablet} {
		width: 100%;
		justify-content: center;
	}
`;

export const TForm = styled(Form)`
	gap: 20px;
	border-radius: 30px;
	background-color: var(--black-two);
	width: 100%;
	padding: ${props => props.$type === 'edit' ? '0' : '40px'};

	@media ${device.mobile} {
		position:  ${props => props.$type !== 'edit' && 'absolute' };
		top: ${props => props.$type !== 'edit' && '24.5%' };
		padding: ${props => props.$type !== 'edit' ? '25px' : '0 20px' };
		max-width: ${props => props.$type !== 'edit' && '95%' };
	}

	@media ${device.tablet} {
		position:  ${props => props.$type !== 'edit' && 'absolute' };
		top: ${props => props.$type !== 'edit' && '19.5%' };
		max-width: ${props => props.$type !== 'edit' && '710px' };
		height: 600px;
	}
`;

export const ProfileForm = styled(Form)`
	gap: 20px;
	margin-bottom: 15px;
	max-width: 420px;
`;

export const TableWrapper = styled(WrapperColumn)`
	background-color: var(--black-two);
	border-radius: 30px;
	height: 450px;

	@media ${device.mobile} {
		width: 95%;
		margin-bottom: 10px;
	}

	@media ${device.tablet} {
		width: 93%;
		margin-bottom: 10px;
	}
`;

export const Table = styled.table`
	width: 100%;
	background-color: transparent;
	padding-bottom: 30px;
	max-height: 400px;
	overflow-x: auto;
	text-transform: capitalize;
	border-collapse: collapse;
`;

export const THead = styled.thead`
	// background-color: #00000033;
	background-color: #0e0d0d;
	position: sticky;
	top: 0;
	z-index: 2;
`;

export const TBody = styled.tbody`

`;

export const TableRow = styled.tr`
`;

export const TableHead = styled.th`
	padding: 15px;
	font-weight: 400;
`; 

export const TableData = styled.td`
	color: var(--white);
	padding: 10px;
	font-size: 20px;
	text-align: center;
	line-height: 24px;
`;

export const TableContainer = styled.div`
	overflow: auto;
	margin-bottom: 25px;

	&::-webkit-scrollbar {
		height: 8px;
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #444446;
		border-radius: 12px;
	}
	
	&::-webkit-scrollbar-corner {
		background-color: transparent;
	}
`;

export const TableIconWrapper = styled(WrapperRow)`
	align-items: start;
	gap: 12px;
`;

export const ThPadding = styled.div`
	@media ${device.mobile} {
		padding: 0 34px;
	}
`;

export const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
   text-transform: capitalize;
   color: var(--white);
   padding: 14px 44px;
   font-size: inherit;
   border-radius: 40px;
   border: 1px solid var(--white);
   background-color: transparent;
	
	&:hover,
	&:focus {
		outline: none;
		color: var(--black);
		background-color: var(--light-mint-green);
		border: 1px solid transparent;
	}
`;

export const HeaderNavLink = styled(StyledNavLink)`
	padding: 10px 25px;
	border-radius: 30px;
	gap: 10px;
	width: 125px;
	color: ${props => props.$type !== 'menu-two' ? 'var(--white)' : 'var(--black)' };
	border: ${props => props.$type === 'menu-two' && '1px solid var(--black)'};
	
	&.active {
		outline: none;
		color: ${props => 
			props.$type !== 'menu-two' ? 'var(--black)' : 'var(--white)'
		};
		background-color: ${props => props.$type !== 'menu-two' ? 'var(--light-mint-green)' : 'var(--black)' };
		border: 1px solid transparent;
	}
`;

export const FormButton = styled.button`
	align-self: start;
	text-transform: capitalize;
   color: var(--white);
   padding: 14px 44px;
   font-size: inherit;
   border-radius: 40px;
   border: 1px solid var(--white);
   background-color: transparent;
	margin: auto 0;
	width: 150px;
	
	&:hover,
	&:focus {
		color: var(--black);
		background-color: var(--light-mint-green);
		border: 1px solid transparent;
		cursor: pointer;
		outline: none;
	}
`;

export const FormLink = styled(NavLink)`
	text-decoration: underline;
	text-transform: capitalize;
	font-size: 12px;
	line-height: 18px;
	color: var(--white);

	&:focus {
		outline: none;
	}
`;

export const ButtonWrapper = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: ${ props => props.$type ? '10px' : '30px' };
	margin: 30px 0;
	
	@media ${device.mobile} {
		padding-left: ${props => props.$type === 'siu' && '20px'};
	}
`;

export const NavButtonWrapper = styled(ButtonWrapper)`
	margin: 16px 0;
	flex-direction: ${props => props.$type === 'menu-two' && 'column'};
`;

export const TableButtonWrapper = styled(ButtonWrapper)`
	margin: 0;
	justify-content: center;
	gap: 10px;
`;

export const NavWoAuth = styled.nav`
   display: ${props => props.$type === 'mobile' ? 'none' : 'flex'};
   justify-content: center;
	align-items: center;
	padding: 0 20px;

	@media ${device.mobile} {
		display: ${props => props.$type === 'mobile' ? 'flex' : 'none'};
	}

	@media ${device.tablet} {
		display: ${props => props.$type === 'mobile' ? 'flex' : 'none'};
	}
`;

export const NavWAuth = styled(NavWoAuth)`
   justify-content: space-between;
	align-items: center;
`; 

export const Burger = styled(Icon)`
	color: var(--white);
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

export const InputWrapper = styled.div`
	position: relative;
	width: 400px;
	
	@media ${device.mobile} {
		width: 100%;
	}
`;

export const Input = styled.input`
	display: ${props => props.$type === 'date' && 'none'};
	color: var(--white);
	font-size: 16px;
	border-radius: 12px;
	background-color: transparent;
	border: ${props => 
		props.$type === 'false' ? 
		'1px solid var(--red-orange)' :
		props.$type === 'true' ? 
		'1px solid var(--light-mint-green)'												:
		'1px solid var(--white-transparent)'
	};

	padding: 12px 40px 12px 18px;	
	width: 100%;
	text-transform: ${props => 
		props.$type === 'profile-dropdown' ? 'uppercase' : 
		props.$type === 'profile-name' ? 'capitalize' : 
		props.$label === 'category' ? 'capitalize' : 'unset' };
	
	&::placeholder {
		color: var(--grey-transparent);
	}

	&:focus,
	&:hover {
		outline: none;
		border: ${ props => 
			props.$type === 'false' ?
			'1px solid var(--red-orange)' : 
			'1px solid var(--light-mint-green)'
		};
		cursor: ${props => 
			props.$label === 'category' || 
			props.$type === 'profile-dropdown'
			? 'pointer' : 'text'};
	}

	&:focus ~ div,
	&:hover ~ div {
		color: var(--light-mint-green);
	}
	
	&::-webkit-calendar-picker-indicator {
    background: none;
	 padding-right: 35px; 
	}
	
	@media ${device.tablet} {
		&::-webkit-calendar-picker-indicator {
			background: none;
			padding-right: 45px; 
		}
	}
	
	@media ${device.mobile} {
		min-width: ${props => props.$type === 'time' && '145px'};
		padding: ${props => props.$type === 'time' && '10px 0 10px 12px'};
	}
`;

export const Search = styled(Input)`
	display: ${props => props.$type === 'hidden' && 'none'};
	border-radius: 30px;
	padding: 12px 45px 12px 20px;
	border-color: ${props => props.$type === 'black' ? 'transparent' : 'var(--white-transparent)'};
	background-color: ${props => props.$type === 'black' ? 'var(--black)' : 'var(--black-two)'};	
	line-height: 18px;
	width: ${props => props.$type === 'black' ? '255px' : '185px'};
	text-align: ${props => props.$type === 'black' ? 'start' : 'center'};

	&:hover {
		cursor: ${props => props.$type === 'black' ? 'text' : 'pointer'};
	}
	
	@media ${device.mobile} {
		width: 95%;
	}
`;

export const SearchWrapper = styled.div`
	padding: 30px 0 30px 30px;
	position: relative;

	&:nth-of-type(2) {
		padding-left: 0;
	}

	@media ${device.mobile} {
		padding: 20px 20px 10px 20px;
		width: 100%;
		&:nth-of-type(2) {
			padding-top: 0;
		}
	}
`;

export const Radio = styled.input`
	display: none;

	&:checked ~ span {
		border: 2px solid var(--light-mint-green);	
	}

	&:checked ~ span::after {
		background-color: var(--light-mint-green);
	}
`;

export const CustomRadio = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: var(--black);
	border: 2px solid var(--dark-gray);

	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		position: absolute;
		top: 5px;
		left: 5px;
		width: 10px;
		height: 10px;
	}
`;

export const Label = styled.label`
	display: flex;
	flex-direction: ${ props => props.$type === "form-radio" ? 'row' : 'column' };
	align-items: ${ props => props.$type === "form-radio" ? 'end' : 'start' };
	gap: ${ props => 
		props.$type === "form-radio" ? '5px' 
		: '10px' };
	width: ${ props => 
		props.$type === "form-radio" ? '18%' : 
		props.$type === "category" ? 'auto' 
		: '100%' };
	color: ${props => 
		props.$type === 'category' ? 'var(--light-mint-green)' 
		: 'var(--white)' };
	padding-bottom: ${props => 
		props.$type === 'category' ? '10px' 
		: '0' };
	margin: ${props => 
		props.$type === 'category' ? '20px 40px' 
		: '0' };
	position: relative;

	@media ${device.mobile} {
		width: ${props => 
			props.$type === "form-radio" && 'auto' };
		margin: ${props => props.$type === 'category' && '15px 20px' };
		padding-bottom: ${props => props.$type === 'category' && '5px' };
	}
`;

export const TextArea = styled.textarea`
	resize: none;
	font: inherit;
	color: inherit;
	width: 100%;
	height: 95px;
	background-color: transparent;
	padding: 18px;
	border-radius: 12px;

	&:hover,
	&:focus {
		border: 1px solid var(--light-mint-green);
		outline: none;
	}	
`;

export const HeadingOne = styled.h1`
   font-size: 56px;
   font-weight: 400;
   color: var(--white);
   line-height: 64.85px;
   text-transform: capitalize;

	@media ${device.mobile} {
		font-size: 34px;
		line-height: 37px;
		font-weight: 400;
	}
`;

export const Button = styled.button`
	align-self: ${props => 
		props.$type === 'profile' ||
		props.$type === 'profile-dropdown' ? 'unset' : 'start' };
	font-size: ${props => 
		props.$type === 'profile' ? '12px' :
		props.$type === 'table' ? '16px' : 'inherit'
		};
	color: ${ props => 
		props.color === 'grey' ||
		props.color === 'black' ? 'var(--white)' : 'var(--black)'
		};
	border: 1px solid transparent;
	background-color: ${ props => 
		props.color === 'grey' ? 'var(--dark-gray)' : 
		props.color === 'black' ? 'var(--black)' : 
		'var(--light-mint-green)'
	};
	padding: ${props => 
		props.$type === 'profile' ? '8px 16px' :
		props.$type === 'category' ? '11px 40px' :
		props.$type === 'table' ? '14px 32px' : '14px 44px' };
	border-radius: ${props => props.$type === 'category' ? '12px' : '40px' };
	position: ${props => props.$type === 'category' ? 'absolute' : 'static' };
	top: 30px;
	right: 0;

	&:hover {
		cursor: pointer;
		color: ${ props => 
			props.color === 'grey' || 
			props.color === 'black' ? 'var(--white-transparent-two)' : 
			'var(--black)'
		};
		background-color: ${props =>
			props.color === 'grey' ||
			props.color === 'black' ? 'var(--dark-gray)' : 
			'var(--dark-mint-green)'
		};
	}
	
	@media ${device.mobile} {
		border-radius: ${props => props.$type === 'table' && '50%'};
		padding: ${props => props.$type === 'table' && '8px'};
	}

	@media ${device.tablet} {
		border-radius: ${props => props.$type === 'table' && '50%'};
		padding: ${props => props.$type === 'table' && '8px'};
	}
`;

export const HeadingTwo = styled.h2`
	font-size: 38px;
	font-weight: 400;
	color: var(--white);
	line-height: 44px;
	text-transform: capitalize;

	@media ${device.mobile} {
		font-size: ${props => props.$type === 'chart' && '34px'};
		text-align: center;
	}
`;

export const HeadingThree = styled.h3`
	font-size: 28px;
	font-weight: 400;
	line-height: 32px;
	margin: ${props => props.$type === 'marginLeft' ? '32px 0 0 40px' : '0'};
	color: var(--white);
	align-self: ${props => 
		props.$type === 'chart' ? 'center' : 'start'};

	@media ${device.mobile} {
		margin: ${props => props.$type === 'marginLeft' && '28px 0 0 25px'};
		padding-left: ${ props => props.$type === 'profile' && '20px'};
	}
`;

export const HeadingFour = styled.h4`
   font-size: 24px;
   line-height: 32px;
   font-weight: 700;
   color: ${ props => 
		props.$isloggedin === 'true' || 
		props.$type === 'table' || 
		props.$type === 'chart' ? 
		'var(--white)'
		:
		'var(--black)'
	};
	position: ${props => props.$type === 'chart' && 'relative'};
	top: ${props => props.$type === 'chart' && '-70px'};
	left: ${props => props.$type === 'chart' && '145px'};

	@media ${device.mobile} {
		font-size: ${props => props.$type === 'home' && '20px'};
		position: ${props => props.$type === 'chart' && 'absolute'};
		top: ${props => props.$type === 'chart' && '47%'};
		left: ${props => props.$type === 'chart' && '155px'};
	};

	@media ${device.tablet} {
		left: ${props => props.$type === 'chart' && '145px'};
	}
`;

export const HeadingFive = styled.h5`
   color: ${ props => 
		props.$isloggedin === 'true' || 
		props.$type === 'chart' ? 
		'var(--white-transparent-two)'
		:
		'var(--black-transparent)'
	};
   font-size: 16px;
   line-height: 18.53px;
	position: ${props => props.$type === 'chart' && 'relative'};
	top: ${props => props.$type === 'chart' && '15px'};
	left: ${props => props.$type === 'chart' && '20px'};

	@media ${device.mobile} {
		font-size: ${props => props.$type === 'home' && '14px'};
	}

`;

export const HeadingSix = styled.h6`
   color: #FAFAFA66;
   letter-spacing: 3px;
   text-transform: uppercase;
	
	@media ${device.mobile} {
		font-size: 14px;
	}
`;

export const ProfileIcon = styled(Icon)`
	position: relative;
	top: ${props => props.$type === 'false' ? '-1px' : '4px'};
	color: var(--light-mint-green);
	padding: 0;
	transform: ${ props => props.$type !== "true" ? 'rotate(180deg)' : 'rotate(0deg)'}
`;

export const FormIcon = styled(Icon)`
	position: absolute;
	top: 2px;
	left: 88%;
	color: var(--white);
	cursor: pointer;

	@media ${device.mobile} {
		top: 7px;
		left: 86%
	}
`;

export const HomeIcon = styled(Icon)`
	background-color: var(--light-mint-green);
   border-radius: 10px;
`;

export const SearchIcon = styled(Icon)`
	position: absolute;
	top: 34px;
	right: 15px;
	color: var(--light-mint-green);

	@media ${device.mobile} {
		right: 60px;
		top: 30px;
	}
`;

export const CloseIcon = styled(Icon)`
	position: absolute;
	top: ${props => props.$type === 'search' ? '6px' : '5px'};
	right: ${props => props.$type === 'search' ? '30px' : '15px'};
	color: var(--white);
	align-self: end;
	z-index: 2;

	&:hover {
		color: var(--light-mint-green);
		cursor: pointer;
	}
	
	@media ${device.mobile} {
		top: ${props => props.$type !== 'search' ? '12px' : '9px' };
		right: ${props => props.$type !== 'search' ? '15px' : '70px' };
	}
`;

export const CurrencyIcon = styled(Icon)`
	position: absolute;
	top: ${props => props.$type === 'false' ? '-1px' : '4px'};
	left: 98px;
	color: var(--white);
	transform: ${props => props.$type === 'false' ? 'rotate(180deg)' : 'rotate(0deg)'};

	@media ${device.mobile} {
		top: ${props => props.$type === 'false' ? '2px' : '7px'};
		left: 90px;
	}
`;

export const TableIcon = styled(Icon)`
	color: inherit;
	padding: 0;
`;

export const DropDownIcon = styled(Icon)`
	color: inherit;
`;

export const CategoryIcon = styled(Icon)`
	color: var(--light-mint-green);
	cursor: pointer;
`;


export const BalWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

	@media ${device.mobile} {
	}
`;

export const Text = styled.p`
   font-size: 12px;
	margin: ${props => props.$type === 'category' ? '10px 0 10px 40px' : '0' };

	@media ${device.mobile} {
		margin: ${props => props.$type === 'category' && '10px 0 10px 28px' };
	}
`;

export const Underline = styled.span`
   text-decoration: underline;
   text-underline-offset: 15px;
   color: var(--light-mint-green);
`;

export const GreenText = styled(Text)`
   color: var(--green);
   align-self: end;
   background-color: #02B15A26;
   border-radius: 13px;
   padding: 4px 10px;
   margin-bottom: 5px;
`;

export const GreyText = styled(Text)`
	display: flex;
	gap: 4px;
   color: #FAFAFA99;
   font-size: 12px;
   line-height: 18px;
`;

export const User = styled.div`
	height: 44px;
	width: 44px;
	border-radius: 100%;
	background-color: var(--white);
`;

export const UserWithBorder = styled(User)`
	position: relative;
	height: 48px;
	width: 48px;
	border: 2px solid #11101C;
	
	&:nth-child(2) {
		z-index: -1;
		left: -12px;
	}

	&:nth-child(3) {
		left: -25px;
		z-index: -2;
	}
`;

export const UserImage = styled.img`
	border-radius: 100%;
	object-fit: cover;
	width: ${props => 
		props.$type === 'profile-pic' ? '100px' : '44px' };
	height: ${props => 
		props.$type === 'profile-pic' ? '100px' : '44px' };
`;

export const DropDown = styled.ul`
	display: flex;
	flex-direction: column;
	// gap: 4px;
	position: absolute;
	top: 60px;
	right: 0;
	width: 215px;
	color: var(--white-transparent-two);
	background-color: var(--black);
	border: 1px solid #FAFAFA1A;
	padding: 10px 20px;
	border-radius: 15px;
	z-index: 12;
	text-transform: capitalize;
`;

export const DropDownList = styled.li`
	display: flex;
	align-items: center;
	gap: 10px;

	&:hover {
		color: var(--white);
		cursor: pointer;
	}
	&:hover > div {
		color: var(--light-mint-green);
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => 
		props.$type === 'menu' ? 'var(--light-mint-green)' : '#0C0D0D99'
	};
	z-index: 9999;
	
`;

export const ModalWrapper = styled(WrapperColumn)`
	justify-content: center;
	align-items: ${props => props.$type === 'logout' ? 'center' : 'unset'};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 500px;
	background-color: var(--black-two);
	border: 1px solid var(--dark-gray-two);
	padding: ${props => 
		props.$type === 'Expenses' ||
		props.$type === 'Incomes' ? '0' 
		:' 20px 30px'
	};
	border-radius: 30px;

	max-height:calc(100% - 10px);

	@media ${device.mobile} {
		width: ${props => 
			props ==='xs' ? '320px' : '365px' 
		};
		padding: 25px 0px;
		padding-top: ${props => 
			props.$type === 'edit' && props.$height <= 600 && props.$height > 550 ? '50px' : 
			props.$type === 'edit' && props.$height <= 550 && props.$height > 500 ? '80px' :
			props.$type === 'edit' && props.$height <= 500 && props.$height > 450 ? '120px' :
			props.$type === 'edit' && props.$height <= 450 && props.$height > 400  ? '180px' : 
			props.$type === 'edit' && props.$height <= 400 && props.$height > 350  ? '250px' :
			props.$type === 'edit' && props.$height <= 350 && '280px' 
		};

		height:${ props => props.$height === 'xs' && '95vh' };
		overflow: ${props => props.$height < 600 && 'auto'};
	}
	
	// yeeeeeep! you see it right, I've copy pasted it since I don't have much time, so give me some slack here hehehe. 

	@media ${device.tablet} {
		padding-top: ${props => 
			props.$type === 'edit' && props.$height <= 600 && props.$height > 550 ? '50px' : 
			props.$type === 'edit' && props.$height <= 550 && props.$height > 500 ? '80px' :
			props.$type === 'edit' && props.$height <= 500 && props.$height > 450 ? '120px' :
			props.$type === 'edit' && props.$height <= 450 && props.$height > 400  ? '180px' : 
			props.$type === 'edit' && props.$height <= 400 && props.$height > 350  ? '250px' :
			props.$type === 'edit' && props.$height <= 350 && '280px' 
		};

		height:${ props => props.$height === 'xs' && '95vh' };
		overflow: ${props => props.$height < 600 && 'auto'};
	}
`;

export const ModalTwo = styled(ModalWrapper)`
	background-color: transparent;
	width: 400px;
	
	height: 100vh;

	@media ${device.tablet} {
		width: 700px;
		overflow: hidden;
	}
`;

export const LogoutContentWrapper = styled(WrapperColumn)`
	text-align: center;
	color: var(--white);
	margin-top: 20px;
`;	

export const ProfilePictureWrapper = styled(WrapperColumn)`
	justify-content: center;
	align-items: center;
	max-width: 420px;
	margin-top: 30px;
`;

export const ProfilePictureDropdownWrapper = styled(WrapperColumn)`
	position: relative;
`;

export const ProfilePictureDropdownList = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px 10px;
	position: absolute;
	top: 50px;
	left: 0;
	width: 100%;
	border: 1px solid var(--white-transparent);
	border-radius: 10px;
	background-color: var(--black);
`; 

export const ProfilePictureDropdownItem = styled.div`
	padding: 2px;
	color: var(--white-transparent-two);

	&:hover {
		color: var(--white);
		cursor: pointer;
	}
`

export const ProfileInput = styled.input`
	display: none;
`;

export const CustomInput = styled.label`
	color: var(--white);
	font-size: 12px;
	padding: 6px 14px;
	border-radius: 50px;
	background-color: var(--dark-gray);

	&:hover {
		cursor: pointer;
		color: var(--gray-two);
	}
`;

export const CategoryWrapper = styled(WrapperColumn)`
	gap: 8px;
`;

export const CategoryList = styled.ul`
	display: flex;
	flex-direction: column;
	// gap: 3px;
	width: 100%;
	height: 200px;
	margin: 0;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #444446;
		border-radius: 12px;
	}
`;

export const CategoryItem = styled.li`
	color: var(--white);
	position: relative;
	text-transform: capitalize;
	margin: 2px 0; 
	background-color: ${props => props.$type === 'true' && 'var(--black)'};
`;

export const CategoryIconWrapper = styled(WrapperRow)`
	display: none;
	position: absolute;
	top: 8px; 
	right: 20px;
`;

export const CategoryInput = styled.input`
	display: none;

	&:checked ~ div {
		display: flex;
	}
`;

export const CategoryLabel = styled.label`
	display:block;
	cursor: pointer;
	width: 100%;
	padding: 15px 0 15px 40px;

	&:hover {
		cursor: pointer;
		background-color: var(--black);
	}

	&:hover ~ div {
		display: flex;
	}

	@media ${device.mobile} {
		padding: 10px 0 10px 25px;
	}
`;

export const CategoryDropDownList = styled.ul`
	position: absolute;
	top: 105%;
	width: 100%;
	border: 1px solid var(--white-transparent);
	border-radius: 10px;
	background-color: var(--black-two);
	padding: 10px;
	z-index: 2;
	text-transform: capitalize;
	color: var(--white);
	height: 100px;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #444446;
		border-radius: 12px;
	}
`;

export const CategoryDropDownListItem = styled.li`
	padding: 5px;
	
	&:hover {
		cursor: pointer;
		background-color: var(--black);
	}
`;

// Custom Calendar

export const CalendarInputWrapper = styled(WrapperRow)`
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	z-index: 3;
`;
export const InputPlaceholder = styled.div`
	position: relative;
	padding-left: ${props => props.$c === 'search' ? '20px' : '15px'};
	color: ${props => 
		props.$type !== '' ? 'var(--white)' :
		'var(--grey-transparent)'};

	@media ${device.mobile} {
		padding-left: 10px;
	}
`;
export const CalendarInput = styled(WrapperRow)`
	align-items: ${props => props.$type === 'search' ? 'inherit' : 'center'};
	justify-content: space-between;
	width:  ${props => props.$type === 'search' ? '210px' : '100%'};
	padding: 5px;
	border: 1px solid var(--white-transparent);
	border-radius: ${props => props.$type === 'search' ? '30px' : '12px'};
	font-size: 16px;

	&:hover {
		cursor: pointer;
		border-color: var(--light-mint-green);
	}

	&:hover div:nth-of-type(2) {
		color: var(--light-mint-green);
	}

	@media ${device.mobile} {
		width: ${props => props.$type === 'search' ? '88%' : '100%'};
		height: 44px;
		padding: ${props => props.$type === 'search' && '18px'};
		margin-left: ${props => props.$type === 'search' && '5px'};
		gap: 5px;
	}
`;

export const CalendarIcon = styled(Icon)`
	color: ${props => 
		props.$type === 'chevron' ? '#0C0D0D66' : 
		props.$type === 'search' ? 'var(--light-mint-green)' 
		: 'var(--white)'
	};

	&:hover {
		cursor: pointer;
		color: ${props => props.$type === 'chevron' && '#0C0D0D'};
	}
`;

export const CalendarWrapper = styled(WrapperColumn)`
	position: absolute;
	top: 110%;
	background-color: var(--light-mint-green);
	border-radius: 10px;
	padding: 5px 10px 10px 10px;
	z-index: 1;
	width: 230px;
	
	@media ${device.mobile} {
		left: 2px;
	}
`;

export const DayList = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: start;
	// gap: 12px;
	color: #0C0D0D80;
	border-top: 1px solid #0C0D0D80;
	padding-top: 15px;
	margin: 10px 9px 10px 0;
`;
export const DayItem = styled.li``;
export const DateList = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-wrap: wrap;
	gap: 6px;
`;
export const DateItem = styled.div`
	width: calc(100% / 7 - 6px);
	text-align: center;
	font-size: 14px;
	color: ${ props => 
		props.$type === 'excess' || 
		props.$type === 'next' ? '#0C0D0D33' :
		props.$type === 'current' ? 'var(--white)' 
			:'#0C0D0D'
		};
	background-color: ${props => 
		props.$type === 'current' ? '#0C0D0D' 
		: 'transparent'
	};
	border-radius: 50px;
	padding: 2px 4px;
	
	&:hover {
		cursor: pointer;
		color: var(--white);
		background-color: #0C0D0D;
	}
`;

export const CalendarHeaderWrapper = styled(WrapperRow)`
	align-items: center;
	justify-content: space-between;
	padding-top: 5px;
`;

export const CalendarHeader = styled(HeadingFive)`
	color: #0C0D0D;
`;

export const ChartList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 300px;
	height: 125px;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #444446;
		border-radius: 12px;
	}

	@media ${device.mobile} {
		position: absolute;
		bottom: 28px;
		width: 270px;
	}

	@media ${device.tablet} {
		
		width: 400px;
	}
`;

export const ChartItem = styled.li`
	display: flex;
	align-items: center;
	// justify-content: space-between;
	gap: 8px;
	text-transform: capitalize;
	font-size: 16px;
`;

export const CustomBullet = styled.span`
	width: 15px;
	height: 15px;
	border-radius: 50%;
`;

// Note to self: Next time start the css from mobile size so you wouldn't have to use such disgusting fix... 
export const DummyElement = styled.div`
	display: none;
	width: 310px;
	height: 545px;
	background-color: red;

	@media ${device.mobile} {
		display: block;
		visibility: hidden;
		order: 3;
	}

	@media ${device.tablet} {
		display: block;
		height: 600px;
		visibility: hidden;
		order: 3;
	}
`;

export const ChartSkeletonWrapper = styled.div`
	display: flex;
	gap: 50px;

	@media ${device.mobile} {
		flex-direction: column;
		justify-content: center;
		gap: 80px;
	}

	@media ${device.tablet} {
		gap: 104px;
	}
`;

export const ChartSkeleton = styled.div`
  width: 16rem;
  height: 8rem;
  background: linear-gradient(to right, rgba(143, 142, 141,0.75) 0%, rgba(237, 235, 233, 0.75) 50%, rgba(143, 142, 141, 0.75) 100%) 0px 0px / 100% 100% rgba(243, 242, 241, 0.5);
  animation: ${animation} 1.25s ease-in-out calc(-1 * 1.25s) infinite alternate;
  border-radius: 10rem 10rem 0 0;

  &:after {
		content: '';
		display: block;
		position: absolute;
		top: 40%;
    	left: 15.3%;
    	width: 12rem;
    	height: 6rem;
		background-color: var(--black-two);
		border-radius: 10rem 10rem 0 0;
  }

  @media ${device.mobile} {
	&:after {
		top: 22%;
		left: 23%;
	}
}
`;

export const ChartSkeletonList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 196px;
	height: 125px;
	
`;

export const ChartSkeletonItem = styled.div`
	width: 80%;
	height: 25px;
	margin-left: 35px;
	border-radius: 4px;
	background: linear-gradient(to right, rgba(143, 142, 141,0.75) 0%, rgba(237, 235, 233, 0.75) 50%, rgba(143, 142, 141, 0.75) 100%) 0px 0px / 100% 100% rgba(243, 242, 241, 0.5);
  	animation: ${animation} 1.25s ease-in-out calc(-1 * 1.25s) infinite alternate;
	position: relative;

	&:after {
		position: absolute;
		content: '';
		top: 0;
		left: -30px;
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: linear-gradient(to right, rgba(143, 142, 141,0.75) 0%, rgba(237, 235, 233, 0.75) 50%, rgba(143, 142, 141, 0.75) 100%) 0px 0px / 100% 100% rgba(243, 242, 241, 0.5);
  		animation: ${animation} 1.25s ease-in-out calc(-1 * 1.25s) infinite alternate;
	}
`;

export const Patch = styled.p`
	position: absolute;
	top: ${props => 
		props.$type === 'cate' ||
		props.$type === 'cur' ? '35px' : '7px'};
	left: ${props => 
		props.$type === 'cate' ? '15px' : 
		props.$type === 'cur' ? '88%' :
		'8px'};
	padding: ${props => 
		props.$type === 'cate' ? '5px 50px 5px 5px' : 
		props.$type === 'cur' ? '5px 15px 5px 5px' : '5px 40px 5px 8px'};
	color: ${props => props.$type === 'cate' ? 'var(--grey-transparent)' : 'var(--white)'};
	font-size: ${props => props.$type === 'cate' ? '17px' : '16px'};
	background-color: var(--black-two);

	@media ${device.mobile} {
		padding: ${props => 
			props.$type === 'cur' ? '5px 0px 5px 8px' :
			props.$type !== 'cate' && '5px 30px 5px 8px'};
		left: ${props => 
			props.$type === 'cur' ? '83%' :
			props.$type !== 'cate' && '5px' 
		};
	}

	@media ${device.tablet} {
		left: ${props => props.$type === 'cur' && '88.5%'};
		padding: ${props => props.$type === 'cur' && '5px 0px 5px 8px'};
	}
`;

export const InputMessage = styled.p`
	position: absolute;
	left: 20px;
	font-size: 12px;
	color: ${props => props.$status === 'true' ? 'var(--light-mint-green)' : 'var(--red-orange)'};
`;

export const ClockIcon = styled(Icon)`
	position: absolute;
	top: 37px;
	right: 5%;
	color: var(--white);
	background-color: var(--black-two);
	// padding-left: 30px;

	@media ${device.tablet} {
		padding-left: 50px;
	}
`;

export const SkeletonLogo = styled(WrapperRow)`
	padding: 0 20px;
`;

export const SkeletonWrapper = styled(WrapperRow)`
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${props => props.$type === 'nav' && '50px'};
	border-bottom: ${props => props.$type === 'nav' && '1px solid var(--dark-gray)'};

	@media ${device.mobile} {
		align-items: ${props => props.$type === 'transaction' && 'center'};
		width: 375px;

		flex-direction: ${props => 
			(props.$type === 'header' ||
			props.$type === 'transaction') && 'column' };
	}
		
	@media ${device.tablet} {
		justify-content: space-between;
		align-items: center;
		flex-direction: ${props => 
			(props.$type === 'header' ||
			props.$type === 'tran-header') && 'column' };
		width: ${props => props.$type !== 'nav' && '705px' };
		margin: 0 auto;
	}

	@media ${device.mobile} {
		flex-direction: ${props => 
			(props.$type === 'tran-header' ||
			props.$type === 'tran-wrapper'
			) && 'column' };
	}
`;

export const SkeletonWrapperCol = styled(WrapperColumn)`
	gap: ${props => props.$type === 'header' ? '10px' : '30px'};
	width: ${props => props.$type === 'header' ? '630px' : '100%'};

	@media ${device.tablet} {
		width: 705px;
		margin-top: ${props => props.$type === 'header' && '50px'};
	}
`;

export const SkeletonButton = styled.div `
	padding: 10px 25px;
	border-radius: 30px;
	height: 40px;
	width: 130px;
	background: linear-gradient(to right, rgba(143, 142, 141,0.75) 0%, rgba(237, 235, 233, 0.75) 50%, rgba(143, 142, 141, 0.75) 100%) 0px 0px / 100% 100% rgba(243, 242, 241, 0.5);
  animation: ${animation} 1.25s ease-in-out calc(-1 * 1.25s) infinite alternate;
	
	&:first-child {
		margin-right: 15px;
	}
	
	@media ${device.tablet} {
		display: none;
	}

	@media ${device.mobile} {
		display: none;
	}
`;

export const SkeletonProfile = styled(SkeletonButton)`
	width: 220px;
	height: 45px;
`;

export const SkeletonContent = styled.div`
	width: ${props => 
		props.$type === 'table' ? '1190px' : 
		props.$type === 'form' ? '100%' :
		props.$type === 'chart' ? '630px' : '16px' };
	height: ${props => 
		props.$type === 'table' ? '450px' : 
		props.$type === 'form' ? '530px':
		props.$type === 'chart' ? '300px': '16px' };
	border-radius: 30px;
	background: linear-gradient(to right, rgba(143, 142, 141,0.75) 0%, rgba(237, 235, 233, 0.75) 50%, rgba(143, 142, 141, 0.75) 100%) 0px 0px / 100% 100% rgba(243, 242, 241, 0.5);
  animation: ${animation} 1.25s ease-in-out calc(-1 * 1.25s) infinite alternate;
  
  @media ${device.tablet} {
		width: 100%;
  }

  @media ${device.mobile} {
		width: 375px;
  }
`;

export const SkeletonTransaction = styled(SkeletonContent)`
	// width: 300px;
	width: ${props => props.$type === 'transaction' ? '300px' : '100%'};
	height: 110px;

	@media ${device.tablet} {
		width: 100%;
	}

	@media ${device.mobile} {
		width: 100%;
	}
`;

export const SkeletonText = styled(SkeletonButton)`
	width: ${props => 
		props.$type === 'header' ? '180px' :
		props.$type === 'long-text' ? '90%' : '75%' 
	};
	
	height: ${props => props.$type === 'header' ? '40px' : '16px' };
	margin-top: ${props => props.$type === 'short-text' && '5px' };

	@media ${device.tablet} {
		display: block;
	}

	@media ${device.mobile} {
		display: block;
	}
`;	

export const NotFoundCon = styled(Container)`
	position: relative;
`;

export const NotFoundImg = styled.img`
	height: 100vh;
	object-fit: fill;
`;

export const NotFoundText = styled.p`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 50px;
	color: var(--white);

	@media ${device.tablet} {
		font-size: 30px;
	}

	@media ${device.mobile} {
		font-size: 18px;
	}
`;