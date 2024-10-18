import { Button } from '@/components/Button';
import { I18Text } from '@/components/I18Text';
import { CustomModal } from '@/components/Modal';
import { TaskItem } from '@/components/TaskItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAlerts } from '@/hooks/alert';
import { useModal } from '@/hooks/modal';
import { translate } from '@/i18n';
import { addTask, deleteTask } from '@/store/slices/tasksSlice';
import { taskSchema } from '@/types/schemas/task';
import type { Task } from '@/types/task';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ErrorMessage, Formik } from 'formik';
import React, { useRef } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { RootState } from '../store/store';
import { typeVariants } from '../theme/theme';
import { useTheme } from '../theme/useTheme';

export const TasksScreen = () => {
    const { theme } = useTheme();
    const inputRef = useRef<TextInput>(null);
    const { isOpen, openModal, closeModal } = useModal()
    const taskList = useSelector((state: RootState) => state.tasks.tasks);
    const {showAlertConfirm} = useAlerts()
    const dispatch = useDispatch();

    const addNewTask = (description:string) => {
        let temp = description.trim();
        if (temp !== '') {
            dispatch(addTask({ id: Date.now().toString(), description: temp }));
        }
        inputRef.current?.clear();
        closeModal()
    };

    const onDeleteTask = (t:Task) => {
        showAlertConfirm("Delete task",()=>{
            dispatch(deleteTask(t.id))
        })
    }


    const renderItem = ({ item }: { item: Task; index: number }) => (
        <TaskItem item={item} onPressDelete={onDeleteTask} />
    );

    const keyExtractor = (item: Task) => `task-${item.id}`;

    return (
        <ThemedView>
            <Button testID='Tasks.addBtn' onPress={() => openModal()} style={styles.btnAdd}>
                <I18Text keyText='taskScreen.new' style={{ color: theme.layoutBg, fontSize: 20 }} />
            </Button>
            <FlatList
                data={taskList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.flatList}
            />

            <CustomModal title={translate("taskScreen.create")} isVisible={isOpen} onClose={() => closeModal()}>
                <Card
                    style={[styles.inputCard, { borderTopColor: theme?.cardBorderColor }]}>
                    <Formik
                        initialValues={{ description: '' }}
                        onSubmit={values => addNewTask(values.description)}
                        validationSchema={taskSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <View style={styles.inputBtnRow}>
                                    <TextInput
                                        testID="newTaskInput"
                                        ref={inputRef}
                                        placeholder={translate("taskScreen.placeholder")}
                                        placeholderTextColor={theme?.color}
                                        style={[
                                            styles.input,
                                            typeVariants.bodyMedium,
                                            {
                                                color: theme?.color,
                                                backgroundColor: theme?.layoutBg,
                                                borderColor: theme?.layoutBg,
                                            },
                                        ]}
                                        onChangeText={handleChange('description')}
                                        onBlur={handleBlur('description')}
                                        value={values.description}
                                    />
                                    <Button testID='btnSubmit' onPress={handleSubmit} style={styles.btnAdd}>
                                        <Ionicons name="checkmark-circle-sharp" size={20} color={theme.layoutBg} />
                                    </Button>
                                </View>

                                <ThemedText style={styles.textError}>
                                    <ErrorMessage name="description" />
                                </ThemedText>
                            </>

                        )}
                    </Formik>
            </Card>
        </CustomModal>
        </ThemedView >
    );
};

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    flatList: {
        paddingHorizontal: 12,
        paddingVertical: 30,
    },
    tickIcon: {
        width: 22,
        height: 22,
    },
    inputCard: {
        borderTopWidth: StyleSheet.hairlineWidth,
        elevation: 4,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    },
    inputBtnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputBtnWrp: {
        flexDirection: 'row',
        flex: 1,
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        flex: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        height: 45,
        backgroundColor: '#f6f6f6',
    },
    btnAdd: {
        borderRadius: 5,
        padding: 6,
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        height: 50,
        marginLeft: 5,
    },
    btnAddText: {
        color: '#fff',
        fontSize: 14,
    },
    textError:{
        color:"red",
        marginTop:3
    }
});
