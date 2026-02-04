import { Tabs } from '../../components/Tab/Tab';
import { Tab } from '../../types/Tab';

export type Props = {
  tabs: Tab[];
};
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
