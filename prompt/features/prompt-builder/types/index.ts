export type PromptSection = {
  id: string;
  type: 'header' | 'body' | 'footer' | 'custom';
  content: string;
  order: number;
};

export type HelperComponent = {
  id: string;
  title: string;
  category: 'task' | 'criteria' | 'folder' | 'custom';
  content: string;
  description?: string;
};

export type DragItem = {
  id: string;
  type: 'helper' | 'section';
  content: string;
};