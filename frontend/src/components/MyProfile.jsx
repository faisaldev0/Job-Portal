import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user, loading } = useSelector((state) => state.user);

  // Safely access user fields with fallback to empty string or default values
  const userName = user?.name || "";
  const userEmail = user?.email || "";
  const userPhone = user?.phone || "";
  const userAddress = user?.address || "";
  const userRole = user?.role || "";
  const userCreatedAt = user?.createdAt || "";
   const niches = user?.niches || {};

  if (loading) {
    return <div>Loading...</div>;  // Show loading state while user data is being fetched
  }

  return (
    <div className="account_components">
      <h3>My Profile</h3>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          disabled
          value={userName}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          disabled
          value={userEmail}
          onChange={(e) => e.target.value}
        />
      </div>
      {user && user.role === "Job Seeker" && (
        <div>
          <label>My Preferred Job Niches</label>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              disabled
              value={niches.firstNiche || ""}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={niches.secondNiche || ""}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={niches.thirdNiche || ""}
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
      )}
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          disabled
          value={userPhone}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          disabled
          value={userAddress}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          disabled
          value={userRole}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Joined On</label>
        <input
          type="text"
          disabled
          value={userCreatedAt}
          onChange={(e) => e.target.value}
        />
      </div>
    </div>
  );
};

export default MyProfile;
