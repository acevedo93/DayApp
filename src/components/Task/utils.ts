export const checkTaskState = (task: any) => {
  if (task.state === 'success') {
    return 'success.200';
  }

  if (task.state === 'pending') {
    return 'danger.400';
  }

  if (task.state === 'progress') {
    return 'warning.200';
  }

  return 'danger.400';
};
