import * as Dialog from '@radix-ui/react-dialog';
import { Link } from 'react-router-dom';
import * as Separator from '@radix-ui/react-separator';
import DownloadSVG from './svg/Download';
import Camera from './svg/Camera';
import ImageID from './svg/ImageID';
import Person from './svg/Person';
import Pexels from './svg/Pexels';

const CustomCard = (props) => {
  const { src, srcDetail, alt, CardBodyStyles, CardBodyImageStyles, CardDetailImageStyles, photographer, photoID, photographerURL, officialURL } = props;

  const handleDownload = () => {
    fetch(srcDetail)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = srcDetail;
        link.target = '_blank';
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className={CardBodyStyles}>
        <img className={CardBodyImageStyles} src={src} alt={alt} />
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-10" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg z-20 w-[360px] h-[600px] md:w-[600px] md:h-[600px]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full h-96">
            <img className={CardDetailImageStyles} src={srcDetail} alt={alt} />
          </div>
          <div className="flex gap-9">
            <div>
              <Dialog.Description className="text-primary text-md md:text-lg flex items-center gap-1 drop-shadow-sm">
                <div className="flex items-center gap-1">
                  <Camera width={25} height={25} />
                  Photographer:
                  <p className="text-emerald-400 hover:text-emerald-500 drop-shadow-sm">{photographer}</p>
                </div>
              </Dialog.Description>
              <Dialog.Description className="text-primary text-md md:text-lg flex items-center gap-1 drop-shadow-sm">
                <div className="flex items-center gap-1">
                  <ImageID width={25} height={25} />
                  Photo ID:
                  <Link to={officialURL} target="blank" className="text-primary underline">
                    <p className="text-emerald-400 hover:text-emerald-500 drop-shadow-sm">{photoID}</p>
                  </Link>
                </div>
              </Dialog.Description>
            </div>

            <button className="outline-none text-xl md:text-2xl bg-secondary rounded hover:bg-primary text-white py-1 px-2 md:py-2 md:px-4 transition-colors duration-200" onClick={handleDownload}>
              <DownloadSVG width={25} height={25} />
            </button>
          </div>
          <Separator.Root className="bg-base data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
        </div>
        <div className="flex justify-between md:justify-evenly">
          <div>
            <p className="text-sm mt-3 font-semibold text-primary">Visit Official Site:</p>
            <Link to="https://www.pexels.com/" target="blank" className="flex items-center hover:text-emerald-600 transition-all duration-200">
              <Pexels width={30} height={30} />
              <p className="text-lg md:text-2xl font-semibold">Pexels</p>
            </Link>
          </div>
          <div>
            <p className="text-sm mt-3 font-semibold text-primary">Visit Photographer:</p>
            <Link to={photographerURL} target="blank" className="flex items-center gap-2 hover:text-emerald-600 transition-all duration-200">
              <Person width={25} height={25} />
              <p className="text-lg md:text-2xl font-semibold">{photographer}</p>
            </Link>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomCard;
