import React from 'react';
import { Link } from 'react-router-dom';

import './UpdateUserAvatar.scss';

import defaultAvatar from '../../assets/images/default-avatar.png';

import { useAvatar } from '../../hooks/useAvatar';

import ReturnButton from '../../components/returnButton/ReturnButton';
import UpdateAvatarForm from '../../components/updateAvatarForm/UpdateAvatarForm';

const UpdateUserAvatar = () => {
  const { handleUpdateUser, handleFileChange, inputFileRef, userAvatar } =
    useAvatar();

  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Avatar</h1>

      <Link to='/home'>
        <ReturnButton />
      </Link>

      <UpdateAvatarForm
        handleUpdateUser={handleUpdateUser}
        handleFileChange={handleFileChange}
        inputFileRef={inputFileRef}
        userAvatar={userAvatar}
        defaultAvatar={defaultAvatar}
      />
    </div>
  );
};

export default UpdateUserAvatar;