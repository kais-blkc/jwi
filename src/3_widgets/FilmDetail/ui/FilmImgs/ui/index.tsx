import { FC } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { FilmImgsItem } from './FilmImgsItem';
import { IApiParams } from '@/6_shared/api';
import { FadeIn } from '@/6_shared/ui/Animate';

interface IFilmImgsProps {
  queryArgs: IApiParams;
}

export const FilmImgs: FC<IFilmImgsProps> = ({ queryArgs }) => {
  return (
    <FadeIn>
      <section className="film-single__imgs slider-full-w">
        <div className="container">
          <Tabs
            defaultIndex={0}
            className="film-tabs"
          >
            <TabList>
              <Tab className="h3 btn btn-round">Фоны</Tab>
              <Tab className="h3 btn btn-round">Постеры</Tab>
            </TabList>

            <TabPanel>
              <FilmImgsItem
                queryArgs={queryArgs}
                imgsType="backdrops"
              />
            </TabPanel>

            <TabPanel>
              <FilmImgsItem
                queryArgs={queryArgs}
                imgsType="posters"
              />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </FadeIn>
  );
};
