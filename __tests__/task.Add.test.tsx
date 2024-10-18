import React from 'react';
import {render, fireEvent, waitFor, act} from '@/utils/test-utils';
import { TasksScreen } from '@/screens/tasks';
import {store} from "@/store/store"

describe('Added new task in screen test', () => {
  it('should be added new task when added new task press', async () => {
    const { getByTestId } = render(<TasksScreen />,{});

    const initialTaskLength = store.getState().tasks.tasks.length
    const addedButton = getByTestId('Tasks.addBtn')

    // Simulate pressing the button for open add modal
    fireEvent.press(addedButton);

    const input = getByTestId('newTaskInput');
    const submitBtn = getByTestId('btnSubmit');

    await waitFor(() =>
      expect(input).toBeDefined()
    )

    // added task name
    act(()=>{
      fireEvent.changeText(input, 'My task name test');
    })
    expect(input.props.value).toBe('My task name test');

    //add new task after validation in formik
    await waitFor(() =>
      fireEvent.press(submitBtn)
    )

    const newTaskLength = store.getState().tasks.tasks.length;
    expect(newTaskLength).toBeGreaterThan(initialTaskLength);
  });
});