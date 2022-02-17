import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2022/01/08/19/13/animal-6924664_960_720.jpg" alt="background_image" />
            </div>
            <div>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar" />
                <div>Description</div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;