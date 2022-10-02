import Avatar from "components/user/components/avatar/Avatar";
import Name from "components/user/components/name/Name";

export default function CompanionUser({ user }) {
    
    return (
        <div className="companionUser">
            <Avatar photoUrl={user.photoURL} />
            <Name userName={user.name} />
        </div>
    )
};
