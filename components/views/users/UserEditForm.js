import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import ReactSelect from 'react-select';
import { API_URL_FILE } from '../../../config';
import { deleteFile, fileUpload } from '../../../store/file/actions';
import {
  addUser,
  bindUserBasicInfo,
  updateUser,
  updateUserPassword,
} from '../../../store/user/actions';
import { userBasicInfoModal, userRole } from '../../../store/user/model';
import { replaceImage, selectThemeColors } from '../../../utils/utolity';
import { useRouter } from 'next/router';
import { TrashIcon } from '@heroicons/react/24/outline';
import { confirmDialog } from '../../custom/ConfirmDialogue';
import { confirmObj } from '../../../utils/enum';

const UserEditForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector(({ users }) => users);

  const handleDataOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    const updatedUser = {
      ...user,
      [name]:
        type === 'number'
          ? Number(value)
          : type === 'checkbox'
          ? checked
          : value,
    };
    dispatch(bindUserBasicInfo(updatedUser));
  };

  const handleDropdownOChange = (data, e) => {
    const { name } = e;
    const updatedUser = {
      ...user,
      [name]: data,
    };

    dispatch(bindUserBasicInfo(updatedUser));
  };

  const bindPhoto = (fileUrl) => {
    const updatedUser = {
      ...user,
      image: fileUrl,
    };

    dispatch(bindUserBasicInfo(updatedUser));
  };

  const handlePhotoUpload = (event) => {
    const { files } = event.target;
    const file = files[0];
    let formData = new FormData();
    formData.append('file', file);

    dispatch(fileUpload(formData, bindPhoto));
  };

  const redirectAfterUserSubmit = (slug) => {
    router.push({
      pathname: '/user/[slug]',
      query: { slug },
    });
  };

  const handlePhotoDelete = (fileName) => {
    confirmDialog(confirmObj).then(async (e) => {
      if (e.isConfirmed) {
        dispatch(deleteFile(fileName, 'default-user.png', bindPhoto));
      }
    });
  };

  const handleSubmit = () => {
    const submitObj = {
      _id: user._id,
      name: user.name,
      email: user.email,
      photoUrl: user.image,
      role: user.role?.value.toLowerCase() ?? '',
    };
    !submitObj?.phoneNumber?.length && delete submitObj.phoneNumber;

    console.log('submitObj', JSON.stringify(submitObj, null, 2));
    dispatch(updateUser(submitObj, redirectAfterUserSubmit));
  };

  const bindAfterPassword = () => {
    const updatedUser = {
      ...user,
      newPassword: '',
    };

    dispatch(bindUserBasicInfo(updatedUser));
  };

  const handleResetPassword = () => {
    const obj = {
      _id: user._id,
      password: user.newPassword,
    };
    dispatch(updateUserPassword(obj, bindAfterPassword));
  };

  const handleCancel = () => {
    router.push('/user');
    dispatch(bindUserBasicInfo(userBasicInfoModal));
  };
  return (
    <div>
      <div className="mb-1 flex justify-between border px-5 py-2">
        <div>
          <h3 className="font-medium">New User</h3>
        </div>
        <div>
          <button
            className="mr-2 rounded-sm bg-primary py-1 px-4 text-white hover:bg-secondary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save
          </button>
          <button
            className="rounded-sm bg-danger py-1 px-4 text-white hover:bg-gray-400"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="min-h-[30rem] rounded-sm border p-5">
        <div className="grid grid-cols-1 gap-6 ">
          <div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={user.name}
                  onChange={(e) => handleDataOnChange(e)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={user.email}
                  onChange={(e) => handleDataOnChange(e)}
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="roleId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
                <ReactSelect
                  id="roleId"
                  instanceId="roleId"
                  theme={selectThemeColors}
                  name="role"
                  className=" focus:ring-0"
                  isClearable
                  value={user?.role}
                  options={userRole}
                  onChange={(data, e) => {
                    handleDropdownOChange(data, e);
                  }}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="mt-8 flex space-x-9">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-bold leading-6 text-gray-900 "
                  >
                    Is Active
                  </label>
                  <input
                    type="checkbox"
                    name="isActive"
                    id="isActive"
                    autoComplete="given-name"
                    className="mt-1 block  rounded-sm border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    checked={user.isActive}
                    onChange={(e) => handleDataOnChange(e)}
                  />
                </div>
              </div>
            </div>

            {/* <div className="my-3 grid grid-cols-1 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <img
                  className="h-32 w-32 border-2 border-primary"
                  width={128}
                  height={128}
                  src={`${API_URL_FILE}/${user.image}`}
                />
              </div>
            </div> */}
            <div className="my-3 grid grid-cols-6 gap-6">
              <div className="col-span-6 space-y-4 sm:col-span-3">
                <div>
                  <label
                    htmlFor="photoId"
                    className="mb-2 block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="group relative">
                    <img
                      className="h-32 w-32 border-2 border-primary"
                      width={128}
                      height={128}
                      src={`${API_URL_FILE}/${user.image}`}
                    />
                    <div className="group absolute bottom-1 left-1 z-10  text-sm font-semibold text-white duration-300 group-hover:bg-secondary/50">
                      <div className=" w-fit bg-white p-1 text-center opacity-0 group-hover:opacity-100">
                        <div className="flex items-center justify-between">
                          <div className=" h-8 w-8  border border-primary text-red-700 hover:text-secondary">
                            <button
                              onClick={() => {
                                handlePhotoDelete(user.image);
                              }}
                            >
                              <TrashIcon width={30} height={30} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="my-3 rounded-sm border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                    htmlFor="userPhotoId"
                  >
                    Upload Photo
                  </label>
                  <input
                    id="userPhotoId"
                    hidden
                    type="file"
                    onChange={(e) => {
                      handlePhotoUpload(e);
                    }}
                    className=" rounded-sm border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                  />
                </div>
              </div>
              <div className="col-span-6 space-y-4  sm:col-span-3">
                {/* <label className="block text-sm font-medium leading-6 text-gray-900">
                  Reset Password
                </label> */}
                <div className="border p-4">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      New Password
                    </label>
                    <input
                      type="text"
                      name="newPassword"
                      id="newPassword"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-sm border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      value={user.newPassword}
                      onChange={(e) => handleDataOnChange(e)}
                    />
                    <div className="text-right">
                      <button
                        className="mt-2 rounded-sm border-2 border-primary  py-1 px-4  text-primary hover:bg-primary hover:text-white"
                        onClick={() => {
                          handleResetPassword();
                        }}
                      >
                        Reset Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditForm;
