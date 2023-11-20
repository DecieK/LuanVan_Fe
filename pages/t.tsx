import Link from "next/link";
import { useState } from "react";

function App() {

    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
      setIsToggleOpen(!isToggleOpen);
    };
    return (
        <div >
            {/* <StyledHeader> */}
                
                <div >
                    <li>
                        <Link href='' className="nav-menu-list">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href='' className="nav-menu-list">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href='' className="nav-menu-list">
                            TIL
                        </Link>
                    </li>
                    <li>
                        <Link href='' className="nav-menu-list">
                            Diary
                        </Link>
                    </li>
                </div>
                <button className="menuToggleBtn" onClick={handleToggleOpen} />
            {/* </StyledHeader> */}
        </div>
    );
}

export default App;

