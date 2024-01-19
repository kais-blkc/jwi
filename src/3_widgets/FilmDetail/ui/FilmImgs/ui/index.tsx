import './styles.scss';
import { FC } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { FilmImgsItem } from './FilmImgsItem';
import { IApiParams } from '@/6_shared/api';
import { FadeIn } from '@/6_shared/ui/Animate';
import { IFilmImgsArgs } from '@/6_shared/model';

interface IFilmImgsProps {
  queryArgs: IApiParams;
  imgListArgsArr: IFilmImgsArgs[];
}

export const FilmImgs: FC<IFilmImgsProps> = ({ queryArgs, imgListArgsArr }) => {
  const tabsTitle = imgListArgsArr.map((item, index) => (
    <Tab
      className='h3 btn btn-round'
      key={index}
    >
      {item.title}
    </Tab>
  ));

  const tabPanels = imgListArgsArr.map((item, index) => (
    <TabPanel key={index}>
      <FilmImgsItem
        queryArgs={queryArgs}
        imgsType={item.imgType}
      />
    </TabPanel>
  ));

  return (
    <FadeIn>
      <section className='film-single__imgs slider-full-w'>
        <div className='container'>
          <Tabs
            defaultIndex={0}
            className='film-tabs'
          >
            <TabList>{tabsTitle}</TabList>

            {tabPanels}
          </Tabs>
        </div>
      </section>
    </FadeIn>
  );
};
