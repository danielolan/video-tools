// TopBar.tsx

import React from 'react';
import LibraryAndTrashButtons from './LibraryAndTrashButtons';
import NewFolderAndVideoButtons from './NewFolderAndVideoButtons';

const TopBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 mt-2.5">
      <LibraryAndTrashButtons />
      <NewFolderAndVideoButtons />
    </div>
  );
};

export default TopBar;
