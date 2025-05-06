import React from "react";

const PhotoboothStats = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="shadow stats">
                <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

            </div>
        </div>
    );
}

export default PhotoboothStats;