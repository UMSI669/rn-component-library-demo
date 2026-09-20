import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { ChoiceChips, DemoButton, StatusCard } from '../index.js';

describe('public components', () => {
  it('calls DemoButton onPress', () => {
    const onPress = vi.fn();
    render(<DemoButton label="Continue" onPress={onPress} />);

    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onPress).toHaveBeenCalledOnce();
  });

  it('communicates the StatusCard content', () => {
    render(
      <StatusCard
        message="Your component is available to the app."
        status="success"
        title="Dependency resolved"
      />,
    );

    expect(screen.getByText('Dependency resolved')).toBeInTheDocument();
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('reports the selected ChoiceChip value', () => {
    const onChange = vi.fn();
    render(
      <ChoiceChips
        label="Release pace"
        onChange={onChange}
        options={[
          { label: 'Weekly', value: 'weekly' },
          { label: 'Monthly', value: 'monthly' },
        ]}
        value="weekly"
      />,
    );

    fireEvent.click(screen.getByRole('radio', { name: 'Monthly' }));

    expect(onChange).toHaveBeenCalledWith('monthly');
  });
});
