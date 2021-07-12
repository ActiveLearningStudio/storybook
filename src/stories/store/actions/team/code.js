export const CodeSnippet = `
import teamService from 'services/team.service';
import * as actionTypes from '../actionTypes';
import store from '../index';

export const resetSelectedTeamAction = () => async (dispatch) => {
  dispatch({
    type: actionTypes.RESET_SELECTED_TEAM,
  });
};

export const updateSelectedTeamAction = (payload) => async (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_SELECTED_TEAM,
    payload,
  });
};

export const showCreationAction = () => async (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_CREATE_TEAM,
  });
};

export const showInvitingAction = () => async (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_INVITE_MEMBER,
  });
};

export const showAssigningAction = () => async (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_ASSIGN_TEAM,
  });
};

export const loadTeamsAction = () => async (dispatch) => {
  const centralizedState = store.getState();
  const { organization: { activeOrganization } } = centralizedState;
  try {
    dispatch({
      type: actionTypes.PAGE_LOADING,
    });

    const { teams } = await teamService.getAll(activeOrganization?.id);

    dispatch({
      type: actionTypes.LOAD_TEAMS,
      payload: { teams },
    });

    dispatch({
      type: actionTypes.PAGE_LOADING_COMPLETE,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.PAGE_LOADING_COMPLETE,
    });

    throw e;
  }
};

export const loadSubOrganizationTeamsAction = () => async (dispatch) => {
  const centralizedState = store.getState();
  const { organization: { activeOrganization } } = centralizedState;
  try {
    dispatch({
      type: actionTypes.PAGE_LOADING,
    });

    const { teams } = await teamService.getAllSubOrganizationTeams(activeOrganization?.id);

    dispatch({
      type: actionTypes.LOAD_TEAMS,
      payload: { teams },
    });

    dispatch({
      type: actionTypes.PAGE_LOADING_COMPLETE,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.PAGE_LOADING_COMPLETE,
    });

    throw e;
  }
};

export const createTeamAction = (data) => async (dispatch) => {
  const centralizedState = store.getState();
  const { organization: { activeOrganization } } = centralizedState;
  try {
    dispatch({ type: actionTypes.CREATE_TEAM_REQUEST });

    const { team } = await teamService.create(data, activeOrganization?.id);

    dispatch({
      type: actionTypes.CREATE_TEAM_SUCCESS,
      payload: { team },
    });

    return team;
  } catch (e) {
    dispatch({ type: actionTypes.CREATE_TEAM_FAIL });

    throw e;
  }
};

export const loadTeamAction = (teamId) => async (dispatch) => {
  const centralizedState = store.getState();
  const { organization: { activeOrganization } } = centralizedState;
  try {
    dispatch({
      type: actionTypes.LOAD_TEAM_REQUEST,
    });

    const { team } = await teamService.get(teamId, activeOrganization?.id);

    dispatch({
      type: actionTypes.LOAD_TEAM_SUCCESS,
      payload: { team },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.LOAD_TEAM_FAIL,
    });
  }
};

export const updateTeamAction = (teamId, data) => async (dispatch) => {
  const centralizedState = store.getState();
  const { organization: { activeOrganization } } = centralizedState;
  try {
    dispatch({ type: actionTypes.UPDATE_TEAM_REQUEST });

    const { team } = await teamService.update(teamId, data, activeOrganization?.id);

    dispatch({
      type: actionTypes.UPDATE_TEAM_SUCCESS,
      payload: { team },
    });
  } catch (e) {
    dispatch({ type: actionTypes.UPDATE_TEAM_FAIL });

    throw e;
  }
};

export const deleteTeamAction = (teamId) => async (dispatch) => {
  const centralizedState = store.getState();
  const { organization: { activeOrganization } } = centralizedState;
  try {
    dispatch({ type: actionTypes.DELETE_TEAM_REQUEST });

    await teamService.remove(teamId, activeOrganization?.id);

    dispatch({
      type: actionTypes.DELETE_TEAM_SUCCESS,
      payload: { teamId },
    });
  } catch (e) {
    dispatch({ type: actionTypes.DELETE_TEAM_FAIL });

    throw e;
  }
};

export const inviteTeamMemberAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.INVITE_MEMBER_CONFIRM_REQUEST });

    const { invited } = await teamService.inviteConfirm(user);

    if (invited) {
      dispatch({
        type: actionTypes.INVITE_MEMBER_CONFIRM_SUCCESS,
        payload: { users: [user] },
      });
    } else {
      dispatch({ type: actionTypes.INVITE_MEMBER_CONFIRM_FAIL });
    }

    return invited;
  } catch (e) {
    dispatch({ type: actionTypes.INVITE_MEMBER_CONFIRM_FAIL });

    throw e;
  }
};

export const inviteTeamMembersAction = (users) => async (dispatch) => {
  dispatch({
    type: actionTypes.INVITE_MEMBER_CONFIRM_SUCCESS,
    payload: { users },
  });
};

export const inviteMemberAction = (teamId, email) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.INVITE_MEMBERS_REQUEST });

    await teamService.inviteMember(teamId, email);

    dispatch({
      type: actionTypes.INVITE_MEMBERS_SUCCESS,
    });

    dispatch(loadTeamAction(teamId));
  } catch (e) {
    dispatch({ type: actionTypes.INVITE_MEMBERS_FAIL });

    throw e;
  }
};

export const inviteMembersAction = (teamId, users, note) => async (dispatch) => {
  const centralizedState = store.getState();
  const { organization: { activeOrganization } } = centralizedState;
  try {
    dispatch({ type: actionTypes.INVITE_MEMBERS_REQUEST });

    await teamService.inviteMembers(teamId, users, note, activeOrganization?.id);

    dispatch({
      type: actionTypes.INVITE_MEMBERS_SUCCESS,
    });

    dispatch(loadTeamAction(teamId));
  } catch (e) {
    dispatch({ type: actionTypes.INVITE_MEMBERS_FAIL });

    throw e;
  }
};

export const removeMemberAction = (teamId, userId, email) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_MEMBER_REQUEST,
      payload: { userId },
    });

    await teamService.removeMember(teamId, userId, email);

    dispatch({
      type: actionTypes.REMOVE_MEMBER_SUCCESS,
    });

    dispatch(loadTeamAction(teamId));
  } catch (e) {
    dispatch({ type: actionTypes.REMOVE_MEMBER_FAIL });

    throw e;
  }
};

export const addProjectsAction = (teamId, ids) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.ADD_TEAM_PROJECTS_REQUEST,
    });

    await teamService.addProjects(teamId, ids);

    dispatch({
      type: actionTypes.ADD_TEAM_PROJECTS_SUCCESS,
    });

    dispatch(loadTeamAction(teamId));
  } catch (e) {
    dispatch({ type: actionTypes.ADD_TEAM_PROJECTS_FAIL });

    throw e;
  }
};

export const removeProjectAction = (teamId, id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_PROJECT_REQUEST,
    });

    await teamService.removeProject(teamId, id);

    dispatch({
      type: actionTypes.REMOVE_PROJECT_SUCCESS,
    });

    dispatch(loadTeamAction(teamId));
  } catch (e) {
    dispatch({ type: actionTypes.REMOVE_PROJECT_FAIL });

    throw e;
  }
};

export const addMembersToProjectAction = (teamId, projectId, ids) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.ADD_MEMBERS_TO_PROJECT_REQUEST,
    });

    await teamService.addMembersToProject(teamId, projectId, ids);

    dispatch({
      type: actionTypes.ADD_MEMBERS_TO_PROJECT_SUCCESS,
    });

    dispatch(loadTeamAction(teamId));
  } catch (e) {
    dispatch({ type: actionTypes.ADD_MEMBERS_TO_PROJECT_FAIL });

    throw e;
  }
};

export const removeMemberFromProjectAction = (teamId, projectId, id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.REMOVE_MEMBER_FROM_PROJECT_REQUEST,
    });

    await teamService.removeMemberFromProject(teamId, projectId, id);

    dispatch({
      type: actionTypes.REMOVE_MEMBER_FROM_PROJECT_SUCCESS,
    });

    dispatch(loadTeamAction(teamId));
  } catch (e) {
    dispatch({ type: actionTypes.REMOVE_MEMBER_FROM_PROJECT_FAIL });

    throw e;
  }
};

`;
