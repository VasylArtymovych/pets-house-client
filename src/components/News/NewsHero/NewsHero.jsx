import { useState } from "react";

export const Hero = () => {
    return (
        <div>
            <h2>News</h2>
            <form>
                <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search"
            />
            <svg width="24px" height="24px">
                <use href="./images/icons/sprite.svg#icon-search"></use>
            </svg>
            </form>
        </div>
    )
};